import React, {memo, useState} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SortModal = ({visible, onClose, onSelect}) => {
  const [selectedOption, setSelectedOption] = useState('URUTKAN');

  const options = [
    'URUTKAN',
    'Nama A-Z',
    'Nama Z-A',
    'Tanggal Terbaru',
    'Tanggal Terlama',
  ];

  const handleSelect = option => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              style={styles.optionContainer}
              onPress={() => handleSelect(option)}>
              <MaterialIcons
                name={
                  selectedOption === option
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
                size={24}
                color={selectedOption === option ? 'orange' : 'gray'}
              />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
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
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeText: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default memo(SortModal);
