import React from "react";
import { Text, View } from "react-native";
import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles";

export default function Card({ data }: CardProps) {
  return (
    <View style={styles.card}>
      <Text>
        {data.nome} - {data.data}
      </Text>
      <View>
        <Text>Cidade: {data.cidade}</Text>
        <Text>Localização: {data.localização}</Text>
        <Text>Descrição: {data.mensagem}</Text>
        <View style={styles.topicos}>
          {data.topico.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
