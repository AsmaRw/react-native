//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>
          Bonjour !
        </Text>
        <Text style={styles.title2}>
          Bonjour !
        </Text>
        <Text style={styles.title3}>
          Bonjour !
        </Text>
        <Image
          source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
          style={{ width: 315, height: 100, margin: 'auto' }} />
        <Image
          source={require('./img/konexio-logo_1.png')}
          style={{ width: 315, height: 100, margin: 'auto' }} />
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me" color="#841584"
        />
        <ActivityIndicator size="large" color="#00ff00" />
      </View >
    </ScrollView >
  );

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  text: {
    backgroundColor: '#fff',
    marginTop: 80,
    width: 400,
    margin: 'auto'
  },
  title: {
    fontSize: 30
  },
  title2: {
    textAlign: 'center'
  },
  title3: {
    fontWeight: 'bold'
  }, wrapperCustom: {
    borderRadius: 8,
    padding: 6
  }
});
