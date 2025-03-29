import StatusBadge from '@Components/StatusBadge';
import {ColorToken} from '@Constants/Color.constants';
import RouteName from '@Constants/Route.constants';
import useCurrencyFormatter from '@Hooks/CurrencyFormater.hooks';
import useDateFormatter from '@Hooks/DateFormater.hooks';
import {useNavigationWithParams} from '@Hooks/Navigation.hooks';
import {Transaction} from '@Types/transaction.type';
import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TransactionItem = ({transaction}: {transaction: Transaction}) => {
  const navigation = useNavigationWithParams();
  const {formatDate} = useDateFormatter();
  const {formatCurrency} = useCurrencyFormatter();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(RouteName.TransactionNavigation, {
          screen: RouteName.DetailTransaction,
          params: transaction,
        })
      }
      style={[
        styles.container,
        transaction?.status === 'PENDING'
          ? styles.pendingBorder
          : styles.successBorder,
      ]}>
      <View>
        <Text style={styles.bankText}>
          {transaction.sender_bank.toLocaleUpperCase()} ➔{' '}
          {transaction.beneficiary_bank.toLocaleUpperCase()}
        </Text>
        <Text style={styles.nameText}>{transaction.beneficiary_name}</Text>
        <Text style={styles.amountText}>
          {formatCurrency(transaction.amount)} •{' '}
          {transaction.status === 'PENDING'
            ? formatDate(transaction.created_at)
            : formatDate(transaction.completed_at)}
        </Text>
      </View>
      <StatusBadge status={transaction.status} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pendingBorder: {borderLeftWidth: 8, borderLeftColor: ColorToken.Primary},
  successBorder: {borderLeftWidth: 8, borderLeftColor: ColorToken.Secondary},
  bankText: {fontWeight: 'bold', fontSize: 16},
  nameText: {
    color: ColorToken.TextPrimary,
    fontSize: 14,
    marginTop: 2,
    fontWeight: '500',
  },
  amountText: {
    color: ColorToken.TextPrimary,
    fontSize: 14,
    marginTop: 2,
    fontWeight: '500',
  },
});

export default memo(TransactionItem);
