import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Navigation from './Navigation';
export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ backgroundColor: '#fc6e06' }} />
        <StatusBar barStyle="dark-content" backgroundColor="#000" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
