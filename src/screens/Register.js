import { View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebase_auth } from '../firebase/firebase_auth';
import eatpet from "../../assets/eatpet.png";

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const response = await createUserWithEmailAndPassword(
                firebase_auth,
                email, 
                password
            );

            // console.log(response);

            navigation.navigate("login");
        } catch (e) {
            console.log("Error de registo", e);
        }
    }; 

  return (
    <View style={styles.container}>
      <Image source={eatpet} style={styles.logo} />
      <Text style={styles.title}>Completa tu email y elegí tu contraseña</Text>
      <TextInput 
        placeholder='Escriba su email aquí'
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
        placeholder='Contraseña'
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
        <Text style ={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Text style={styles.registroText}>Ya tienes cuenta?</Text>
      <Pressable onPress={() => navigation.navigate("login")}>
          <Text style={styles.sesion}>Inicia Sesión</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: 250, 
      height: 250, 
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      color: colors.heavyColor,
    },
    input: {
      width: "85%",
      height: 50,
      borderColor: colors.mediumColor,
      borderWidth: 2,
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
      fontSize: 17,
    },
    button: {
      backgroundColor: colors.mediumColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
      fontWeight: "600",
      color: colors.lightColor,
    },
    registroText: {
      marginTop: 30,
      fontSize: 18,
      color: colors.heavyColor,
    },
    sesion: {
      marginTop: 0.5,
      fontSize: 25,
      fontWeight: "800",
      color: colors.mediumColor,
    }
  });

export default Register