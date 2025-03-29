import {combineReducers} from '@reduxjs/toolkit';
import transactionSlice from 'src/store/reducer/Transaction.reducer';

const rootReducer = combineReducers({
  transactionSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
