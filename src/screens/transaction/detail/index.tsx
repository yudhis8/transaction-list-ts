import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface DetailTransactionProps {}

const DetailTransaction = (props: DetailTransactionProps) => {
  return (
    <View style={styles.container}>
      <Text>DetailTransaction</Text>
    </View>
  );
};

export default DetailTransaction;

const styles = StyleSheet.create({
  container: {},
});
