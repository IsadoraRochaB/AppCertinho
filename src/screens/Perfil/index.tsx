import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { MaterialIcons } from "@expo/vector-icons";

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
        <Image source={require("../../assets/Union.png")} />
      </View>

      <View style={styles.location}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Localização"
              keyboardType="email-address"
              secureTextEntry={true}
              autoCapitalize="none"
            />
      </View>

      <View style={styles.location}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              keyboardType="email-address"
              secureTextEntry={true}
              autoCapitalize="none"
            />
      </View>


      <View style={styles.location}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              keyboardType="email-address"
              secureTextEntry={true}
              autoCapitalize="none"
            />
      </View>

 






      <View style={styles.input}>
        <Button title="PUBLICAR" type="black" onPress={handleSignIn} />
        <Button title="VOLTAR" type="grey" onPress={handleLogin} />  
      </View>     
    </View>
  );
}


       
    
