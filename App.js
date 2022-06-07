/*
  Where app is exported. React Native Paper is used to wrap the entirety of the app
  to implement features, specifically for the drawer(i.e. Drawer.Item and Drawer.Section).
*/

// imports
import React from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './navigators/AppNavigator';
import { StatusBar } from 'expo-status-bar';

// default export app wrapped in navigation container
export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="dark" />
      <AppNavigator />
    </PaperProvider>
  );
}