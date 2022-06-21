import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
  Alert
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { useAuth } from "../../hook/auth";
import { LoginTypes } from "../../types/Screen.types";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";

export default function Login({ navigation }: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }

  async function handleSignIn(){
    try{
     setIsLoading(true);
     if (data?.email && data.password) {
      await signIn(data);
     }else{

      Alert.alert("Preencha todos os campos!!!");
      setIsLoading(false);
     }
    }catch (error){
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
        if (data.data) {
          for (const [key, value] of Object.entries(data.data)) {
            message = `${message} ${value}`;
          }
        }
        Alert.alert(`${data.message} ${message}`);
        setIsLoading(false);
    }
  }
  useEffect(() => {
    setIsLoading(false);
}, []);
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
              autoCapitalize="none"
              onChangeText={(i) => handleChange({ email: i })}
            />
          </View>
          <View style={styles.formRow}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(i) => handleChange({ password: i })}
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