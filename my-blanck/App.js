/*zona 1: de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';

const Texto=()=>{
  const[contenido,setContenido]=useState('Hola Mundo RNative');
  const actualizaTexto=()=>{setContenido('Estado actualizado del Text')}
  return(
  <Text onPress={actualizaTexto}>{contenido}</Text>
  )
};
const Boton=()=>{
  const [contenido,setContenido]=useState('Chinito no quelel tlabajal')
  const actualizarButton=()=>{setContenido('Tlabaja ya actualizado!!')}
  return(
    <Button title={contenido} onPress={actualizarButton} />
  )
};
/*zona 2: Main*/
export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Tlabaja!!"></Button>
      <Boton></Boton>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <StatusBar style="auto" />
    </View>
  );
};

/*zona 3: Estetica del screen*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
