import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="white" />
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        placeholderTextColor="white"
        value={query}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#511f52',

    paddingVertical: 5, // Padding superior e inferior
    paddingHorizontal: 10, // Padding a los costados
    borderRadius: 30, // Bordes redondeados
    width: '90%', // Ajusta según sea necesario
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5, // Espacio superior
    marginBottom: 5, // Espacio inferior
    shadowColor: '#000', // Sombra para el efecto de flotación
    shadowOffset: { width: 0, height: 3 }, // Offset de la sombra
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
    elevation: 5, // Elevación para Android
  },
  input: {
    flex: 1,
    marginLeft: 10,

    height: 40,
  },
});

export default SearchBar;