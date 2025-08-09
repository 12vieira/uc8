import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🧠</Text>
      <Text style={styles.titulo}>Quiz Interativo sobre Natal/RN!</Text>
      <Text style={styles.subtitulo}>
        Teste seus conhecimentos sobre a história da nossa cidade.
      </Text>
      <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoNumero}>15</Text>
            <Text style={styles.infoTexto}>Perguntas</Text>
          </View>
          <View style={styles.divisor} />
          <View style={styles.infoItem}>
            <Text style={styles.infoNumero}>🏆</Text>
            <Text style={styles.infoTexto}>Pontuação</Text>
          </View>
        </View>
      <Pressable style={styles.botao} onPress={() => router.push('/quiz')}>
        <Text style={styles.textoBotao}>Começar Quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa',
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  titulo: { 
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center', 
  },
  subtitulo: { 
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingBottom: 20,
  },
   botao: {
    backgroundColor: '#3498db',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 30,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
  },
  divisor: {
    width: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 15,
  },
  infoNumero: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  infoTexto: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  }
});
