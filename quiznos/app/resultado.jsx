import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ResultScreen() {
  const router = useRouter();
  const { pontuacao, total } = useLocalSearchParams();

  const nota = ((Number(pontuacao) / Number(total)) * 10).toFixed(2);


  let corNota = '#ff4d4d'; // vermelho
  if (nota >= 7) corNota = '#4CAF50'; // verde
  else if (nota >= 5) corNota = '#FF9800'; // laranja

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Quiz Finalizado!</Text>
      <Text style={styles.resultado}>
        Você acertou {pontuacao} de {total} perguntas.
      </Text>
      <Text style={[styles.nota, { color: corNota }]}>Sua nota: {nota}</Text>

      <Pressable style={styles.botao} onPress={() => router.replace('/')}>
        <Text style={styles.textoBotao}>Jogar Novamente</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  resultado: { fontSize: 18, marginBottom: 10 },
  nota: { fontSize: 22, fontWeight: 'bold', marginBottom: 30 },

  botao: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
