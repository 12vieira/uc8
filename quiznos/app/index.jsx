import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Bem-vindo ao Quiz de História de Natal/RN!</Text>
      <Text style={styles.subtitulo}>
        Teste seus conhecimentos sobre a história da nossa cidade.
      </Text>
      <Button title="Começar Quiz" onPress={() => router.push('/quiz')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  subtitulo: { fontSize: 16, marginBottom: 30, textAlign: 'center', color: '#555' },
});
