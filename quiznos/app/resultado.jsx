import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ResultScreen() {
  const router = useRouter();
  const { pontuacao, total } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Quiz Finalizado!</Text>
      <Text style={styles.resultado}>
        Você acertou {pontuacao} de {total} perguntas.
      </Text>
      <Button title="Jogar Novamente" onPress={() => router.replace('/')} />
    </View>
  );
}

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
