/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, Text,TextInput,Button,StyleSheet, TouchableOpacity,} from 'react-native';
import React from 'react';


export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Add Vehicals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height:860,
    backgroundColor:'#ffffff'
    // width:'100vw',
  },
  topic:{
    color: 'black', 
    fontSize: 30, 
    marginRight: '35%',
    marginBottom: '164%'
  }
});