import { View, Text, TouchableOpacity, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { colors } from '../theme/colors';
import { firebase_auth } from '../firebase/firebase_auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setIdToken, setUser } from '../redux/slice/authSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import eatpet from "../../assets/eatpet.png"

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        //console.log("intentando iniciar sesión");
        try {
            const response = await signInWithEmailAndPassword(
                firebase_auth,
                email,
                password, 
            );
            //console.log("inicio sesión ok", response); 
            AsyncStorage.setItem("userEmail", response.user.email);
            dispatch(setUser(response.user.email));
            dispatch(setIdToken(response._tokenResponse.idToken));
            //console.log(response);
        } catch (e) {
            console.log("Error en Login", e);
        }
    };

  return (
    <View style={styles.container}>
      <Image source={eatpet} style={styles.logo} />
      <Text style={styles.titleComprar}>¡Bienvenido a nuestra tienda!</Text>
      <Text style={styles.title}>Inicia sesión</Text>
      
      <TextInput
        placeholder = "Nombre de usuario"
        style = {styles.input}
        value = {email}
        onChangeText ={(text) => setEmail(text)}
      />
      <TextInput
        placeholder = "Contraseña"
        secureTextEntry
        style = {styles.input}
        value = {password}
        onChangeText ={(text) => setPassword(text)}
      />
      <TouchableOpacity style = {styles.button} onPress={handleLogin}>
        <Text style = {styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Text style ={styles.registroText}>¿No tienes cuenta?</Text>
      <Pressable onPress={() => navigation.navigate("register")}>
        <Text style ={styles.registro}>¡Registrate!</Text>
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
        width: 200, 
        height: 200, 
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: "bold",
        color: colors.heavyColor,
    },
    titleComprar: {
      fontSize: 22,
      marginBottom: 20,
      color: colors.mediumColor,
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
    },
    registroText: {
        marginTop: 30,
        fontSize: 18,
        color: colors.heavyColor,
    },
    registro: {
        marginTop: 0.5,
        fontSize: 25,
        fontWeight: "800",
        color: colors.mediumColor,
    }
});

export default Login;