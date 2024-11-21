import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { auth } from '../utils/FirebaseConfig'; // Asegúrate de configurar Firebase aquí
import { createUserWithEmailAndPassword } from 'firebase/auth';

type RegisterScreenNavigationProp = NavigationProp<RootStackParamList, 'RegisterScreen'>;

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<RegisterScreenNavigationProp>();


  const onSubmit = () => {
    if (!email || !password || !username) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    setError('');

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Si el registro es exitoso, navega a LoginScreen
        navigation.navigate('LoginScreen');
      })
      .catch((err: any) => {
        // Maneja los errores de Firebase
        if (err.code === 'auth/email-already-in-use') {
          setError('Este correo ya está registrado.');
        } else if (err.code === 'auth/invalid-email') {
          setError('El correo no es válido.');
        } else if (err.code === 'auth/weak-password') {
          setError('La contraseña es demasiado débil.');
        } else {
          setError('Ha ocurrido un error. Inténtelo de nuevo.');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/gato.png')} style={styles.logo} />
      <Text style={styles.title}>Registrarse</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Registrarse" color="#754b73" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#ebeaeb',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Louis',
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 10,
    borderRadius: 50,
    alignSelf: 'center',
  },
  input: {
    borderColor: '#754b73',
    backgroundColor: '#ece1eb',
    borderWidth: 1,
    padding: 10,
    width: 300,
    marginBottom: 16,
    borderRadius: 20,
    alignSelf: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
});
