import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';



export default function Registrar() {
  const [username, setUsername] = React.useState('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    if (!email || !password) {
      setError("registrar cuenta");
      return;
    }
    setError("");
    // TODO: connect to Firebase authentication
  };

  return (
    <View style={styles.container}>
       <Image source={require('@/assets/images/gato.png')} style={styles.logo} /> 
      <Text style={styles.title}> Registrarse</Text>
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
      <Button title="Registrarse" color='#754b73'  onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 160,
  
    justifyContent: 'center',
    backgroundColor: '#ebeaeb',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily:'Louis',
    
    
  },
  logo: {
    width: 210,  // Ajusta el ancho de la imagen
    height: 210, // Ajusta la altura de la imagen
    marginBottom: 10,  // Espacio entre el logo y el título
    borderRadius:50,
    left:50,
  },
  input: {
    borderColor: '#754b73',
    backgroundColor:'#ece1eb',
    borderWidth: 1,
    padding: 10,
    width:300,
    marginBottom: 16,
    borderRadius: 20,
  },
  error: {
    color: 'red',
    marginBottom: 1,
  },
});
