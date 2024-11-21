import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import TabLayout from '../components/TabLayout'; // Importa el componente TabLayout
import { BackHandler } from 'react-native';

const CategoriaScreen = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para almacenar la búsqueda

  const favoriteBooks = [
    { id: '1', title: 'El Señor de los Anillos' },
    { id: '2', title: 'Cien Años de Soledad' },
    { id: '3', title: '1984' },
    { id: '4', title: 'Martin Fierro' },
    { id: '5', title: 'Amor y Prejuicio' },
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
      <View style={styles.mainContent}>
        {/* Agregar SearchBar */}
        <SearchBar onSearch={handleSearch} />

        <Text style={styles.title}>Categoria de Favoritos</Text>

        {/* Botón personalizado */}
        <TouchableOpacity style={styles.button} onPress={toggleFavorites}>
          <Text style={styles.buttonText}>Mostrar Favoritos</Text>
        </TouchableOpacity>

        {showFavorites && (
          <FlatList
            data={filteredBooks} // Usar los libros filtrados
            renderItem={({ item }) => (
              <View style={styles.bookItem}>
                <Text style={styles.bookText}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>

      {/* Separador visual entre contenido principal y TabLayout */}
      <View style={styles.separador} />

      {/* TabLayout alineado al final */}
      <View style={styles.tabLayoutContainer}>
        <TabLayout />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ebeaeb',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Louis',
    backgroundColor: '#ebeaeb',
  },
  button: {
    backgroundColor: '#754b73', 
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    width: 200,
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
  separador: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  tabLayoutContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
  },
});

export default CategoriaScreen;
