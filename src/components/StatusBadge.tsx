import {ColorToken} from '@Constants/Color.constants';
import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface StatusBadgeProps {
  status: 'SUCCESS' | 'PENDING';
}

const StatusBadge = ({status}: StatusBadgeProps) => {
  return (
    <View
      style={[
        styles.badge,
        status === 'PENDING' ? styles.pending : styles.success,
      ]}>
      <Text
        style={[
          styles.badgeText,
          status === 'PENDING' ? styles.textPending : styles.textSuccess,
        ]}>
        {status === 'PENDING' ? 'Pengecekan' : 'Berhasil'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  success: {backgroundColor: ColorToken.Secondary},
  pending: {
    borderWidth: 2,
    borderColor: ColorToken.Primary,
  },
  badgeText: {fontSize: 12, fontWeight: 'bold', textAlign: 'center'},
  textSuccess: {color: ColorToken.BaseWhite},
  textPending: {color: ColorToken.TextPrimary},
});

export default memo(StatusBadge);
