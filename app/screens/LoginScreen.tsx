import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '.expo/types/types';
import { FIREBASE_AUTH } from "../utils/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"; // Importa el método correcto

type LoginScreenNavigationProp = NavigationProp<RootStackParamList, 'LoginScreen'>;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const auth = FIREBASE_AUTH;

  const onSubmit = () => {
    if (!email || !password) {
      setError("Please enter your username and password.");
      return;
    }

    setError("");
    
    // Utiliza el método correcto para la versión más reciente de Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Home'); // Navegar a la pantalla Home
      })
      .catch((err: any) => { // Especificar tipo 'any' o un tipo más específico si lo conoces
        setError(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/gato.png')} style={styles.logo} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
      <Button title="Iniciar Sesión" color="#754b73" onPress={onSubmit} />
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
