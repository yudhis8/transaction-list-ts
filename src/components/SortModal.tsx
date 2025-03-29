import {ColorToken} from '@Constants/Color.constants';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import {SortModalProps, SortOptions} from '@Types/modalsort.type';
import React, {memo, useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SortModal: React.FC<SortModalProps> = ({visible, onSelect}) => {
  const [selectedOption, setSelectedOption] = useState(SortOptions.DEFAULT);

  const options = Object.values(SortOptions); // Use enum values as options

  const handleSelect = (option: SortOptions) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <Modal transparent={true} visible={visible} animationType='fade'>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              style={styles.optionContainer}
              onPress={() => handleSelect(option)}>
              <MaterialDesignIcons
                name={
                  selectedOption === option
                    ? 'radiobox-marked'
                    : 'radiobox-blank'
                }
                size={24}
                color={
                  selectedOption === option
                    ? ColorToken.Primary
                    : ColorToken.TextSecondary
                }
              />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
    elevation: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default memo(SortModal);
