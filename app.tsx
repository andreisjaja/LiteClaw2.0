// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './app/screens/MainScree';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScree">
        <Stack.Screen name="MainScree" component={MainScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Registrarse' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
