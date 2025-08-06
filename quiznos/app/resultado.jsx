import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ResultScreen() {
  const router = useRouter();
  const { pontuacao, total } = useLocalSearchParams();

  const nota = Math.round((Number(pontuacao) / Number(total)) * 10);

  let corNota = '#ff4d4d'; // vermelho
  if (nota >= 7) corNota = '#4CAF50'; // verde
  else if (nota >= 5) corNota = '#FFEB3B'; // amarelo

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Quiz Finalizado!</Text>
      <Text style={styles.resultado}>
        Você acertou {pontuacao} de {total} perguntas.
      </Text>
      <Text style={[styles.nota, { color: corNota }]}>Sua nota: {nota}/10</Text>
      <Button title="Jogar Novamente" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  resultado: { fontSize: 18, marginBottom: 10 },
  nota: { fontSize: 22, fontWeight: 'bold', marginBottom: 30 },
});
