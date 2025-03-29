import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchTransactions} from '@Store/action/Transaction.action';
import {SortOptions} from '@Types/modalsort.type';
import {Transaction, TransactionState} from '@Types/transaction.type';

const initialState: TransactionState = {
  transactionList: {
    loading: true,
    error: null,
    data: null,
  },
  transactionFiltered: [],
  currentSortOption: SortOptions.DEFAULT, // Track the current sort option
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    filterTransactions: (state, action: PayloadAction<string>) => {
      const searchText = action.payload.toLowerCase();

      // Ensure transactionList.data is not null or undefined
      const filtered =
        state.transactionList.data?.filter(transaction => {
          return (
            transaction.beneficiary_name.toLowerCase().includes(searchText) ||
            transaction.sender_bank.toLowerCase().includes(searchText) ||
            transaction.beneficiary_bank.toLowerCase().includes(searchText) ||
            transaction.amount.toString().includes(searchText)
          );
        }) || [];

      // Apply the current sort option to the filtered data
      state.transactionFiltered = filtered.sort((a, b) => {
        switch (state.currentSortOption) {
          case SortOptions.NAME_ASC:
            return a.beneficiary_name.localeCompare(b.beneficiary_name);
          case SortOptions.NAME_DESC:
            return b.beneficiary_name.localeCompare(a.beneficiary_name);
          case SortOptions.DATE_NEWEST:
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          case SortOptions.DATE_OLDEST:
            return (
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
            );
          default:
            return 0; // No sorting for default option
        }
      });
    },
    sortTransactions: (state, action: PayloadAction<SortOptions>) => {
      const sortOption = action.payload;
      state.currentSortOption = sortOption; // Update the current sort option

      // Ensure transactionFiltered is not empty before sorting
      if (state.transactionFiltered.length > 0) {
        state.transactionFiltered.sort((a, b) => {
          switch (sortOption) {
            case SortOptions.NAME_ASC:
              return a.beneficiary_name.localeCompare(b.beneficiary_name);
            case SortOptions.NAME_DESC:
              return b.beneficiary_name.localeCompare(a.beneficiary_name);
            case SortOptions.DATE_NEWEST:
              return (
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
              );
            case SortOptions.DATE_OLDEST:
              return (
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
              );
            default:
              return 0; // No sorting for default option
          }
        });
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.transactionList.loading = true;
        state.transactionList.error = null; // Reset error state
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.transactionList.loading = false;
          state.transactionList.data = action.payload || []; // Ensure data is not null
          state.transactionFiltered = action.payload || []; // Initialize filtered transactions
        },
      )
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.transactionList.loading = false;
        state.transactionList.error =
          action.error.message || 'Failed to fetch transactions'; // Handle errors
      });
  },
});

export const {filterTransactions, sortTransactions} = transactionSlice.actions;

export default transactionSlice.reducer;
