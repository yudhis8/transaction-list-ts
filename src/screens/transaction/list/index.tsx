import SearchHeader from '@Components/SearchHeader';
import SortModal from '@Components/SortModal';
import TransactionItem from '@Components/TransactionItem';
import {ColorToken} from '@Constants/Color.constants';
import {useAppDispatch, useTypedSelector} from '@Hooks/Selector.hooks';
import {fetchTransactions} from '@Store/action/Transaction.action';
import {
  filterTransactions,
  sortTransactions,
} from '@Store/reducer/Transaction.reducer';
import {SortOptions} from '@Types/modalsort.type';
import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ListTransaction = () => {
  const dispatch = useAppDispatch();
  const transactionList = useTypedSelector(
    state => state.transaction.transactionFiltered,
  );
  const transactionListLoading = useTypedSelector(
    state => state.transaction.transactionList.loading,
  );
  const [sortVisible, setSortVisible] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [selectedSort, setSelectedSort] = React.useState(SortOptions.DEFAULT);

  React.useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // Debounce search input
  React.useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(filterTransactions(searchText)); // Dispatch the filter action after debounce
    }, 500); // 0.5-second debounce delay

    return () => clearTimeout(delayDebounce); // Clear timeout on cleanup
  }, [searchText, dispatch]);

  const handleSort = (option: SortOptions) => {
    setSelectedSort(option);
    setSortVisible(false);
    dispatch(sortTransactions(option)); // Dispatch the sort action
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : undefined}
      style={styles.container}>
      <SortModal visible={sortVisible} onSelect={handleSort} />
      <FlatList
        data={transactionList}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContent}
        ListHeaderComponent={
          <SearchHeader
            onPressSort={() => setSortVisible(true)}
            onChangeText={handleSearch}
            value={searchText}
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
    </KeyboardAvoidingView>
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
