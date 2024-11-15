import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import SearchBar from '../components/SearchBar'; // Asegúrate de que la ruta sea correcta

type BibliotecaScreenNavigationProp = NavigationProp<RootStackParamList, 'BibliotecaScreen'>;

const BibliotecaScreen = () => {
  const navigation = useNavigation<BibliotecaScreenNavigationProp>();
  
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para almacenar la búsqueda

  const favoriteBooks = [
    { id: '1', title: 'El Señor de los Anillos' },
    { id: '2', title: 'Cien Años de Soledad' },
    { id: '3', title: '1984' },
  ];

  // Filtrar libros según la búsqueda
  const filteredBooks = favoriteBooks.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  // Función para manejar la búsqueda
  const handleSearch = (query: string) => {
    setSearchQuery(query); // Actualiza el estado con la búsqueda del usuario
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca de Favoritos</Text>
      
      {/* Agregar SearchBar */}
      <SearchBar onSearch={handleSearch} />

      {/* Botón personalizado */}
      <TouchableOpacity style={styles.button} onPress={toggleFavorites}>
        <Text style={styles.buttonText}>Mostrar Favoritos</Text>
      </TouchableOpacity>
      
      {showFavorites && (
        <FlatList
          data={filteredBooks}  // Usar los libros filtrados
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <Text style={styles.bookText}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainScreen')}
      >
        <Text style={styles.buttonText}>Ir a la pantalla principal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ebeaeb',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Louis',
    backgroundColor: '#ebeaeb',
  },
  button: {
    backgroundColor: '#754b73',  // Cambia aquí el color de fondo del botón
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    width: 200,  // Opcional, puedes ajustar el ancho
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  bookItem: {
    padding: 10,
    backgroundColor: '#ece1eb',
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
  },
  bookText: {
    fontSize: 18,
  },
});

export default BibliotecaScreen;
