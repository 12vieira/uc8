import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import QuestionCard from '../components/QuestionCard';
import questions from '../data/questions';

export default function QuizScreen() {
  const [index, setIndex] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const router = useRouter();
  const perguntaAtual = questions[index];

  const responder = (opcao) => {
    if (respostaSelecionada) return;
    setRespostaSelecionada(opcao);
    if (opcao === perguntaAtual.resposta) {
      setPontuacao(pontuacao + 1);
    }
  };

  const proximaPergunta = () => {
    if (!respostaSelecionada) return;
    setRespostaSelecionada(null);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      router.push({
        pathname: '/resultado',
        params: {
          pontuacao: pontuacao.toString(),
          total: questions.length.toString(),
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>
        Pergunta {index + 1} de {questions.length}
      </Text>
      <QuestionCard
        pergunta={perguntaAtual.pergunta}
        opcoes={perguntaAtual.opcoes}
        onResponder={responder}
        respostaSelecionada={respostaSelecionada}
      />
      {respostaSelecionada && (
        <Text style={styles.feedback}>
          {respostaSelecionada === perguntaAtual.resposta ? '✅ Correto!' : '❌ Errado!'}
        </Text>
      )}
      <Text style={styles.instrucoes}>Clique no botão para próxima pergunta</Text>
      <Button title="Próxima" onPress={proximaPergunta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  contador: { fontSize: 16, marginBottom: 10 },
  feedback: { fontSize: 18, marginTop: 10 },
  instrucoes: { marginTop: 20, fontStyle: 'italic', textAlign: 'center' },
});
