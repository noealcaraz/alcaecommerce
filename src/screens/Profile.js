import { View, Text, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useState } from 'react';
import { Entypo } from "@expo/vector-icons";
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { usePutImageMutation } from '../services/ecApi';
import { useGetImageQuery } from '../services/ecApi';


const Profile = () => {
  // const [image, setImage] = useState(null);

  const [ putImage, result ] = usePutImageMutation();
  const { data, isLoading, error, isError, refetch } = useGetImageQuery();
 
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

    console.log(result);

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

  return (
    <View>
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
              color="#0000ff"
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
            <Entypo name="camera" size={24} color="black"  />
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
            <AntDesign name="picture" size={24} color="black" />
          </Pressable>
          <Text style={styles.textButton}>Explorar galería</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: 200, 
    height: 200,
    borderRadius: 30,
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
  },
  textButton: {
    marginLeft: 15,
    fontFamily: "Montserrat",
    fontSize: 20,
  }
})

export default Profile;