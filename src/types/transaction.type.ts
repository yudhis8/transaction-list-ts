import {SortOptions} from '@Types/modalsort.type';

export type Transaction = {
  id: string;
  amount: number;
  unique_code: number;
  status: 'SUCCESS' | 'PENDING';
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
};

// Define the entire object type
export type TransactionRecord = {
  [key: string]: Transaction;
};

export interface TransactionState {
  transactionList: {
    loading: boolean;
    error: string | null;
    data?: Transaction[] | null;
  };
  transactionFiltered: Transaction[];
  currentSortOption: SortOptions;
}
