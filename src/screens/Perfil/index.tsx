import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import {
 
  TextInput,
  
} from "react-native";

export default function Perfil({ navigation }: LoginTypes) {
  async function handleSignIn() {
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../assets/Isa.png")} />
      </View>

      <View style={styles.local}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="localização"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>


 





      <Text style={styles.title}>NOME</Text>
      <View style={styles.input}>
        <Button title="DADOS" type="black" onPress={handleSignIn} />
        <Button title="PUBLICAR" type="black" onPress={handleSignIn} />
        <Button title="VOLTAR" type="grey" onPress={handleLogin} />  
      </View>     
    </View>
  );
}


       
    
