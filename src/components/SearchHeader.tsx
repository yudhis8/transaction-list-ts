import {ColorToken} from '@Constants/Color.constants';
import Icon from '@react-native-vector-icons/material-design-icons';
import {SortOptions} from '@Types/modalsort.type';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type SearchHeaderProps = {
  onChangeText: (text: string) => void;
  value: string;
  onPressSort: () => void;
  selectedFilter?: SortOptions;
};

const SearchHeader: React.FC<SearchHeaderProps> = ({
  onChangeText,
  value,
  onPressSort,
  selectedFilter,
}) => {
  return (
    <View style={styles.container}>
      <Icon name='magnify' size={24} color={ColorToken.TextSecondary} />
      <TextInput
        style={styles.searchBox}
        value={value}
        onChangeText={onChangeText}
        placeholder='Cari nama, bank, atau nominal'
        placeholderTextColor={ColorToken.TextSecondary}
      />
      <TouchableOpacity style={styles.sortArea} onPress={onPressSort}>
        <Text style={styles.textSort}>{selectedFilter}</Text>
        <Icon name='chevron-down' size={24} color={ColorToken.Primary} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchHeader);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    color: ColorToken.TextPrimary,
    width: '60%',
    fontSize: 12,
  },
  sortArea: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textSort: {
    fontSize: 12,
    fontWeight: 'bold',
    color: ColorToken.Primary,
  },
});
