import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Importa el creador de pestañas
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from './useColorScheme';
import SearchBar from './SearchBar'; // Importa la barra de búsqueda
import BibliotecaScreen from '../screens/BibliotecaScreen';

// Colores
const iconColor = '#a987a8'; // Color de los iconos
const pressedColor = '#511f52'; // Color cuando el icono es presionado

const Tab = createBottomTabNavigator(); // Crea el componente de navegación de pestañas

// Función para manejar la búsqueda
const handleSearch = (query: string) => {
  console.log('Buscando:', query);
};

// Componente principal de navegación con barra de navegación inferior
export default function TabLayout() {
  const colorScheme = useColorScheme(); // Obtiene el esquema de color

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: iconColor,
        tabBarInactiveTintColor: iconColor,
        tabBarShowLabel: false, // Oculta las etiquetas de texto de las pestañas
        headerShown: true, // Mostrar encabezado en las pantallas
        header: () => (
          <View style={{ padding: 10 }}>
            <SearchBar onSearch={handleSearch} />
          </View>
        ),
      }}
    >
      {/* Pantalla 1 - Home */}
      <Tab.Screen
        name="Biblioteca"
        component={BibliotecaScreen} // Aquí va el componente de tu pantalla
        options={{
          tabBarIcon: ({ size }) => (
            <Pressable>
              {({ pressed }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={pressed ? pressedColor : iconColor}
                  size={size}
                />
              )}
            </Pressable>
          ),
        }}
      />
      
     
      
    </Tab.Navigator>
  );
}
