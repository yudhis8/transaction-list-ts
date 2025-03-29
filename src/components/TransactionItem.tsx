import StatusBadge from '@Components/StatusBadge';
import {ColorToken} from '@Constants/Color.constants';
import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TransactionItem = ({transaction}) => {
  return (
    <View
      style={[
        styles.container,
        true ? styles.pendingBorder : styles.successBorder,
      ]}>
      <View>
        <Text style={styles.bankText}>asd ➔ asd</Text>
        <Text style={styles.nameText}>asd</Text>
        <Text style={styles.amountText}>Rpasd • asd</Text>
      </View>
      <StatusBadge status={transaction.status} />
    </View>
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
  nameText: {color: '#555', fontSize: 14, marginTop: 2},
  amountText: {color: '#888', fontSize: 13, marginTop: 4},
});

export default memo(TransactionItem);
