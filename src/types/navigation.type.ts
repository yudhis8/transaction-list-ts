import RouteName from '@Constants/Route.constants';
import {Transaction} from '@Types/transaction.type';

export type TransactionParamList = {
  [RouteName.ListTransaction]: undefined;
  [RouteName.DetailTransaction]: Transaction;
};

export type MainNavigationParamList = {
  [RouteName.TransactionNavigation]: {
    screen: keyof TransactionParamList;
    params?: TransactionParamList[keyof TransactionParamList];
  };
};
