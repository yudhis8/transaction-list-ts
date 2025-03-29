import {createAsyncThunk} from '@reduxjs/toolkit';
import {Transaction} from '@Types/transaction.type';

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchTransactions',
  async () => {
    const response = await fetch(
      'https://recruitment-test.flip.id/frontend-test',
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Transaction[] = await response.json();
    const mappedTransactions = Object.values(data).map(
      transaction => transaction,
    );
    console.log('🚀 ~ mappedTransactions:', mappedTransactions);
    return mappedTransactions;
  },
);
