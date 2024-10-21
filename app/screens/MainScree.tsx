import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';




type MainScreenNavigationProp = NavigationProp<RootStackParamList, 'MainScreen'>;

const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate('LoginScreen')}
      />
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MainScreen;
