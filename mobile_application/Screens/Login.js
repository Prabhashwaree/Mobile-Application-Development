/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, Text,TextInput,Button,StyleSheet, TouchableOpacity,} from 'react-native';
import React from 'react';


export default function Login() {
  return (
    <View style={styles.container}>
      <Text  style={{color: 'black', fontSize: 50,  marginTop: '-34%'}}> Login</Text>
      <TextInput placeholderTextColor="black" style={styles.input1} placeholder="Username" />
      <TextInput placeholderTextColor="black" style={styles.input2} placeholder="Password" />
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#ffffff', fontSize: 20}}> Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input1: {
    marginTop: '30%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 100,
  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 100,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height:860,
    backgroundColor:'#ffffff'
    // width:'100vw',
  },
  btn: {
    width: '60%',
    padding: 5,
    backgroundColor: 'green',
    height: 60,
    width :300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
    borderRadius: 100,
  },
});