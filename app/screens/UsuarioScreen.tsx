import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TabLayout from '../components/TabLayout';
import { auth } from '../utils/FirebaseConfig'; // Importa tu configuración de Firebase
import { signOut } from 'firebase/auth';

const UsuarioScreen = () => {
  const [userName, setUserName] = useState('Usuario'); // Nombre del usuario
  const [profileImage, setProfileImage] = useState<any>(null); // Imagen de perfil

  useEffect(() => {
    // Cargar datos del usuario
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'Usuario');
      // Usar require para imágenes locales directamente
      setProfileImage(require('../imagenes/default-profile.png')); // Ruta correcta a tu imagen predeterminada
    }
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log('Sesión cerrada'))
      .catch((error) => console.log('Error al cerrar sesión:', error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        {/* Sección de información del usuario */}
        <View style={styles.profileSection}>
          <Image
            source={profileImage || require('../imagenes/default-profile.png')} // Siempre se usa la imagen predeterminada
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{userName}</Text>
        </View>

        {/* Botón de cerrar sesión */}
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Separador visual entre el contenido principal y TabLayout */}
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
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
    fontSize: 16,
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

export default UsuarioScreen;
