import TransactionItem from '@Components/TransactionItem';
import * as React from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useNavigationWithParams} from 'src/hooks/Navigation.hooks';

const ListTransaction = () => {
  const navigation = useNavigationWithParams();
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3]}
        ListHeaderComponent={
          <TextInput
            style={styles.searchBox}
            placeholder='Cari nama, bank, atau nominal'
          />
        }
        // keyExtractor={item => item.id}
        renderItem={({item}) => <TransactionItem transaction={item} />}
      />
    </View>
  );
};

export default ListTransaction;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  searchBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
  },
});
