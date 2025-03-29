import {combineReducers} from '@reduxjs/toolkit';
import transactionSlice from '@Store/reducer/Transaction.reducer';

const rootReducer = combineReducers({
  transactionSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
