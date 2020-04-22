import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Navigation from './Navigation';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ backgroundColor: '#ff500f' }} />
        <StatusBar barStyle="dark-content" backgroundColor="#000" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
