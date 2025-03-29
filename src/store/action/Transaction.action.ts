import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchTransactions',
  async () => {
    const response = await fetch(
      'https://recruitment-test.flip.id/frontend-test',
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Await the JSON parsing
    const mappedTransactions = Object.values(data).map(
      transaction => transaction,
    );
    console.log('🚀 ~ mappedTransactions:', mappedTransactions);
    return mappedTransactions;
  },
);
