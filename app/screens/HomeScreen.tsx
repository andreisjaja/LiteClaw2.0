import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('LoginScreen'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la pantalla de inicio.</Text>
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
});
