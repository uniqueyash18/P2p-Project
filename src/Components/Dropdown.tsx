import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width } from '../styles/responsiveSize';

interface Props {
  options: any;
  onSelect: (value: any) => void;
  placeholder?: string;
  value: any;
}

const Dropdown: React.FC<Props> = ({ options, onSelect, placeholder = 'Select', value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownToggle}>
        <Text style={styles.placeholder}>{!!value ? value : placeholder}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item.value)} style={styles.option}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.value}
            style={styles.optionsList}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownToggle: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    minWidth: 150,
    alignItems: 'center',
  },
  placeholder: {
    color: '#333',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    minWidth: 150,
  },
  option: {
    padding: 10,
    width: width,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  optionsList: {
    maxHeight: 150,
  },
});

export default Dropdown;
