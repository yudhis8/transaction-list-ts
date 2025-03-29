import SearchHeader from '@Components/SearchHeader';
import SortModal from '@Components/SortModal';
import TransactionItem from '@Components/TransactionItem';
import {SortOptions} from '@Types/modalsort.type';
import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

const ListTransaction = () => {
  const [sortVisible, setSortVisible] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [selectedSort, setSelectedSort] = React.useState(SortOptions.DEFAULT);
  const handleSort = (option: SortOptions) => {
    console.log('Selected:', option);
    setSelectedSort(option);
    setSortVisible(false);
  };
  return (
    <View style={styles.container}>
      <SortModal visible={sortVisible} onSelect={handleSort} />
      <FlatList
        data={[1, 2, 3]}
        style={styles.flatlist}
        ListHeaderComponent={
          <SearchHeader
            onPressSort={() => setSortVisible(true)}
            onChangeText={text => setSearch(text)}
            value={search}
            selectedFilter={selectedSort}
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
  container: {flex: 1},
  flatlist: {padding: 16},
});
