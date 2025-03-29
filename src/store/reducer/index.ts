import {combineReducers} from '@reduxjs/toolkit';
import transaction from '@Store/reducer/Transaction.reducer';

const rootReducer = combineReducers({
  transaction,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
