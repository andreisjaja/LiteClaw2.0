export type RootStackParamList = {
    MainScreen: undefined; // No pasa parámetros a esta pantalla
    LoginScreen: undefined; // Tampoco pasa parámetros a esta pantalla
    RegisterScreen: undefined; // No pasa parámetros
    BibliotecaScreen: undefined; // BibliotecaScreen necesita un parámetro 'userId' (de tipo string)
};