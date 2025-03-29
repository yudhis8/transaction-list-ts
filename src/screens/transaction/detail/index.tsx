import StatusBadge from '@Components/StatusBadge';
import {ColorToken} from '@Constants/Color.constants';
import RouteName from '@Constants/Route.constants';
import useCurrencyFormatter from '@Hooks/CurrencyFormater.hooks';
import useDateFormatter from '@Hooks/DateFormater.hooks';
import {useNavigationWithParams, useTypedRoute} from '@Hooks/Navigation.hooks';
import {TransactionParamList} from '@Types/navigation.type';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from '@react-native-vector-icons/material-design-icons';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const DetailTransaction = () => {
  const navigation = useNavigationWithParams();
  const {params} = useTypedRoute<
    TransactionParamList,
    typeof RouteName.DetailTransaction
  >();
  const {formatCurrency} = useCurrencyFormatter();
  const {formatDate} = useDateFormatter();
  const copyToClipboard = () => {
    Clipboard.setString(`#${params.id}`);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.sectionArea, {marginTop: 16}]}>
        <TouchableOpacity style={styles.row} onPress={copyToClipboard}>
          <Text style={styles.title}>ID TRANSAKSI: #{params.id} </Text>
          <Icon name={'content-copy'} size={20} color={ColorToken.Primary} />
        </TouchableOpacity>
      </View>

      <View style={[styles.sectionArea, styles.border]}>
        <View style={[styles.row, styles.space]}>
          <Text style={styles.title}>DETAIL TRANSAKSI </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Text style={styles.close}>Tutup</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionArea}>
        <View style={styles.row}>
          <Text style={styles.title}>
            {params?.sender_bank.toLocaleUpperCase()} ➔{' '}
            {params?.beneficiary_bank.toLocaleUpperCase()}
          </Text>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>{params?.beneficiary_name}</Text>
            <Text style={styles.value}>{params?.account_number}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>NOMINAL</Text>
            <Text style={styles.value}>{formatCurrency(params?.amount)}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>BERITA TRANSFER</Text>
            <Text style={styles.value}>{params?.remark}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>KODE UNIK</Text>
            <Text style={styles.value}>{params?.unique_code}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>WAKTU DIBUAT</Text>
            <Text style={styles.value}>{formatDate(params?.created_at)}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>WAKTU SELESAI</Text>
            <Text style={styles.value}>{formatDate(params?.completed_at)}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>STATUS</Text>
            <View style={styles.badge}>
              <StatusBadge status={params?.status} />
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>BIAYA</Text>
            <Text style={styles.value}>{formatCurrency(params?.fee)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailTransaction;

const styles = StyleSheet.create({
  container: {},
  sectionArea: {
    backgroundColor: ColorToken.BaseWhite,
    padding: 16,
  },
  border: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: ColorToken.TextSecondary,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  space: {
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
  },
  close: {
    color: ColorToken.Primary,
    fontWeight: 'bold',
  },
  value: {
    color: ColorToken.TextPrimary,
  },
  column: {
    marginTop: 10,
    width: '50%',
  },
  badge: {minWidth: 100, maxWidth: '60%', marginTop: 4},
});
