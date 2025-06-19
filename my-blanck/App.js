// Zona 1: Importaciones
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = ({style}) => {
  const [contenido, setContenido] = useState("Hola Mundo RNative"); 
  const actualizaTexto = () => {setContenido('Hola como estas?')}
  return (
    <View Style = {{margin: 10}}>
      <Text Style = {[styles.text, style]}>{contenido}</Text>
      <Button title = "Actualizar Texto" onPress = {actualizaTexto} color = "purple"/>
    </View>
  )
};

// Zona 2: main
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}> </Texto>
      <Texto style={styles.blue}> </Texto>
      <Texto style={styles.green}> </Texto>
      <StatusBar style="auto" />
    </View>
  );
}

// Zona 3: Estética del screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BA98B',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  text:{
    color: 'white',
    fontSize: 27,
  },
  red:{backgroundColor: 'red'},
  blue:{backgroundColor: 'blue'},
  green:{backgroundColor: 'green'},
});