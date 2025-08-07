import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quiz de História sobre Natal/RN!</Text>
      <Text style={styles.subtitulo}>
        Teste seus conhecimentos sobre a história da nossa cidade.
      </Text>
      <Pressable style={styles.botao} onPress={() => router.push('/quiz')}>
        <Text style={styles.textoBotao}>Começar Quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  titulo: { fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  subtitulo: { fontSize: 16, 
    marginBottom: 30, 
    textAlign: 'center', 
    color: '#555' 
  },
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
