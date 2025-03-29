import SearchHeader from '@Components/SearchHeader';
import SortModal from '@Components/SortModal';
import TransactionItem from '@Components/TransactionItem';
import {ColorToken} from '@Constants/Color.constants';
import {useAppDispatch, useTypedSelector} from '@Hooks/Selector.hooks';
import {fetchTransactions} from '@Store/action/Transaction.action';
import {SortOptions} from '@Types/modalsort.type';
import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ListTransaction = () => {
  const dispatch = useAppDispatch();
  const transactionList = useTypedSelector(
    state => state.transaction.transactionList.data,
  );
  const transactionListLoading = useTypedSelector(
    state => state.transaction.transactionList.loading,
  );
  const [sortVisible, setSortVisible] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [selectedSort, setSelectedSort] = React.useState(SortOptions.DEFAULT);

  React.useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleSort = (option: SortOptions) => {
    setSelectedSort(option);
    setSortVisible(false);
  };

  return (
    <View style={styles.container}>
      <SortModal visible={sortVisible} onSelect={handleSort} />
      <FlatList
        data={transactionList}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContent}
        ListHeaderComponent={
          <SearchHeader
            onPressSort={() => setSortVisible(true)}
            onChangeText={text => setSearch(text)}
            value={search}
            selectedFilter={selectedSort}
          />
        }
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            {transactionListLoading ? (
              <ActivityIndicator size={'large'} color={ColorToken.Primary} />
            ) : (
              <Text style={styles.emptyMessage}>No transactions found</Text>
            )}
          </View>
        }
        renderItem={({item}) => <TransactionItem transaction={item} />}
      />
    </View>
  );
};

export default ListTransaction;

const styles = StyleSheet.create({
  container: {flex: 1},
  flatlist: {padding: 16},
  flatlistContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    color: ColorToken.TextSecondary,
  },
});
