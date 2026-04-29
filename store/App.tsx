import './gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './src/routes/index.routes';
import Login from './src/pages/login';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
