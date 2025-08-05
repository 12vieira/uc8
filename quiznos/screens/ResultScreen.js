import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { pontuacao, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Quiz Finalizado!</Text>
      <Text style={styles.resultado}>Você acertou {pontuacao} de {total} perguntas.</Text>
      <Button title="Jogar Novamente" onPress={() => navigation.replace('Quiz')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    marginBottom: 30,
  },
});

export default ResultScreen;
