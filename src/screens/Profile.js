import { View, Text, Image, StyleSheet, Pressable, ActivityIndicator, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'

import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import { colors } from '../theme/colors';


import { usePutImageMutation } from '../services/ecApi';
import { useGetImageQuery } from '../services/ecApi';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/authSlice';


const Profile = ({ navigation }) => {
  // const [image, setImage] = useState(null);

  const [ putImage, result ] = usePutImageMutation();
  const { data, isLoading, error, isError, refetch } = useGetImageQuery();
  const dispatch = useDispatch();


  const defaultImage = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true, 
    });

    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64, ${result.assets[0].base64}`,
      });
      refetch();
    }
  };

  const openCamera = async () => {
    const permissionsResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionsResult.granted === false) {
      alert("No le diste acceso a la app para acceder a tu cámara");
      return;
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
      });

      console.log(result);

      if(!result.canceled) {
        await putImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`
        });
        refetch();
      }
    }
  };

  const handleLogout = async () => {
    try {
      dispatch(clearUser());
      await AsyncStorage.removeItem("userEmail");

    } catch (error) {
      console.log(error)
    }
  }

  const alertLogout = () =>
    Alert.alert('Cerrar sesion', '¿Está seguro que desea cerrar sesion?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {text: 'Si', onPress: () => handleLogout()},
    ]);


  return (
    <ScrollView>
      <Header title= "Mi perfil" />
      
      <View style={{ alignItems: "center", marginTop: 15 }}>
        {isLoading ? (
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
          > 
            <ActivityIndicator
              style={{ flex: 1 }}
              size="large"
              color="#6568A8"
            />
          </View> 
          ) : (
          <Image 
              style={ styles.imagen }
              source={{
              uri: data ? data.image : defaultImage,
            }}
          />
          )}
      </View>
      <View style={{ marginLeft: 50 }}>
        <View style={styles.buttonCont}>
          <Pressable 
            style={styles.iconCont}
            onPress={() => openCamera()}
          >
            <Entypo name="camera" size={34} color="#6568A8"  />
          </Pressable>
          <Text style={styles.textButton}>Tomar foto</Text>
        </View>
      </View>
      <View style={{ marginLeft: 50 }}>
        <View style={styles.buttonCont}>
          <Pressable 
            style={styles.iconCont}
            onPress={() => pickImage()}
          >
            <AntDesign name="picture" size={34} color="#6568A8" />
          </Pressable>
          <Text style={styles.textButton}>Explorar galería</Text>
        </View>
      </View>
      <View style={{ marginLeft: 50 }}>
        <View style={styles.buttonCont}>
          <Pressable 
            style={styles.iconCont}
            onPress={alertLogout}
          >
            <MaterialIcons name="logout" size={34} color="#6568A8" />
          </Pressable>
          <Text style={styles.textButton}>Cerrar sesión</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: 250, 
    height: 250,
    borderRadius: 150,
    marginTop: 30,
  },
  buttonCont: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  iconCont: {
    padding: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.mediumColor,
    marginTop: 20,
  },
  textButton: {
    marginTop: 20,
    marginLeft: 15,
    fontFamily: "Cantarell",
    fontWeight: "900",
    fontSize: 30,
    color: colors.mediumColor,
  }
})

export default Profile;