import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState(''); // 'error' o 'exito'

  const validarYRegistrar = () => {
    if (!nombre.trim() || !correo.trim()) {
      setMensaje('Por favor, llena todos los campos.');
      setTipoMensaje('error');
      return;
    }
    if (!aceptaTerminos) {
      setMensaje('Debes aceptar términos y condiciones.');
      setTipoMensaje('error');
      return;
    }

    setMensaje(`Registro exitoso\nNombre: ${nombre}\nCorreo: ${correo}`);
    setTipoMensaje('exito');

    // Limpiar campos después de registrar
    setNombre('');
    setCorreo('');
    setAceptaTerminos(false);
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/GIF.jpg.mp4')} // Asegúrate que exista
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
      />

      <View style={styles.formulario}>
        <Text style={styles.label}>Nombre completo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre completo"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
          value={correo}
          onChangeText={setCorreo}
        />

        <View style={styles.terminosContainer}>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
          />
          <Text style={styles.textTerminos}>Acepto términos y condiciones</Text>
        </View>

        <Button title="Registrarse" onPress={validarYRegistrar} />

        {mensaje ? (
          <View
            style={[
              styles.mensajeBox,
              tipoMensaje === 'error' ? styles.error : styles.exito,
            ]}
          >
            <Text style={styles.mensajeText}>{mensaje}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formulario: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para mejor lectura
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 40,
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textTerminos: {
    marginLeft: 10,
    color: '#fff',
  },
  mensajeBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 6,
  },
  error: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c2c7',
    borderWidth: 1,
  },
  exito: {
    backgroundColor: '#d1e7dd',
    borderColor: '#badbcc',
    borderWidth: 1,
  },
  mensajeText: {
    color: '#000',
    fontWeight: 'bold',
    whiteSpace: 'pre-line',
  },
});
