import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";

export default function Login({ navigation }: LoginTypes) {
  async function handleSignIn() {
    navigation.navigate("Tab");
  }
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <View style={styles.container}>
       <ImageBackground
        source={require("../../assets/Vector.png")}
        style={styles.background}
      >
        <KeyboardAvoidingView>
          <Text style={styles.title}>LOGIN</Text>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.butom}>
          <Button title="Login" type="black" onPress={handleSignIn} />
          </View>

          <Button title="Cadastre-se" type="grey" onPress={handleCadastrar} />
        </KeyboardAvoidingView>
        </ImageBackground>
    </View>
  );
}