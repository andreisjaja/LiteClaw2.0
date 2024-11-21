import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

// Define el tipo de navegación
type Navigation = NavigationProp<RootStackParamList>;

export default function TabLayout() {
  const navigation = useNavigation<Navigation>(); // Tipado de useNavigation

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('BibliotecaScreen')}
        >
          <MaterialCommunityIcons name="book" color="#a987a8" size={30} />
          <Text style={styles.buttonText}>Biblioteca</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('CategoriaScreen')}
        >
          <MaterialCommunityIcons name="menu" color="#a987a8" size={30} />
          <Text style={styles.buttonText}>Categoría</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('UsuarioScreen')}
        >
          <MaterialCommunityIcons name="account" color="#a987a8" size={30} />
          <Text style={styles.buttonText}>Usuario</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#a987a8',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: '#a987a8',
    marginTop: 5,
    fontSize: 12,
  },
});
