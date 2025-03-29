import {ColorToken} from '@Constants/Color.constants';
import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StatusBadge = ({status}) => {
  return (
    <View style={[styles.badge, true ? styles.pending : styles.success]}>
      <Text
        style={[
          styles.badgeText,
          true ? styles.textPending : styles.textSuccess,
        ]}>
        Pengecekan
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
  badgeText: {fontSize: 12, fontWeight: 'bold'},
  textSuccess: {color: ColorToken.BaseWhite},
  textPending: {color: ColorToken.TextPrimary},
});

export default memo(StatusBadge);
