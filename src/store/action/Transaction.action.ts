import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchTransactions',
  async () => {
    const response = await fetch(
      'https://recruitment-test.flip.id/frontend-test ',
    );
    const mappedTransactions = Object.values(response.json()).map(
      transaction => transaction,
    );
    return mappedTransactions;
  },
);
