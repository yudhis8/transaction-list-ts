import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Transaction, TransactionState} from '@Types/transaction.type';
import {fetchTransactions} from 'src/store/action/Transaction.action';

const initialState: TransactionState = {
  transactionList: {
    loading: true,
    error: null,
    data: null,
  },
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.transactionList.loading = true;
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.transactionList.loading = false;
          state.transactionList.data = action.payload;
        },
      )
      .addCase(fetchTransactions.rejected, state => {
        state.transactionList.loading = false;
      });
  },
});

export const {} = transactionSlice.actions;

export default transactionSlice.reducer;
