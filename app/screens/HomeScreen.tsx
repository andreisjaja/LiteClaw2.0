
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WheelPicker from 'react-native-wheel-picker';

const PickerItem = WheelPicker.Item;

export default function Home() {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(0);
  const items = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];

  const handleLogout = () => {
    // Aquí puedes añadir tu lógica de logout si la tienes
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la pantalla de inicio.</Text>
      <WheelPicker
        selectedItem={selectedItem}
        data={items}
        onItemSelected={setSelectedItem}
        style={styles.picker}
      />
      <Text style={styles.selectedText}>Seleccionado: {items[selectedItem]}</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} color="#754b73" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  picker: {
    width: 150,
    height: 150,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },
});
