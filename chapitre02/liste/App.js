import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './componant/List';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>Countries</Text>
      <StatusBar style="auto" />
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});