import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import { AuthProvider, AuthContext } from './src/context/AuthContext';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainNavigator from './src/navigation/MainNavigator';

const Stack = createNativeStackNavigator();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#00695c',    
    onPrimary: '#ffffff',     
    secondaryContainer: '#E0F2F1', 
    onSecondaryContainer: '#004d40', 
    surface: '#ffffff',
    onSurface: '#191c1c',  
    onSurfaceVariant: '#707978',
    background: '#f0f4f7',   
    error: '#ba1a1a',
  },
};

const AppContent = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? (
        <MainNavigator />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </PaperProvider>
  );
}