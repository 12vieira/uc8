import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import QuestionCard from '../components/QuestionCard';
import questions from '../data/questions';

const QuizScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const perguntaAtual = questions[index];

  const responder = (opcao) => {
    setRespostaSelecionada(opcao);
    if (opcao === perguntaAtual.resposta) {
      setPontuacao(pontuacao + 1);
    }
  };

  const proximaPergunta = () => {
    setRespostaSelecionada(null);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      navigation.navigate('Resultado', { pontuacao, total: questions.length });
    }
  };

  return (
    <GestureRecognizer onSwipeLeft={proximaPergunta}>
      <View style={styles.container}>
        <Text style={styles.contador}>Pergunta {index + 1} de {questions.length}</Text>
        <QuestionCard
          pergunta={perguntaAtual.pergunta}
          opcoes={perguntaAtual.opcoes}
          onResponder={responder}
          respostaSelecionada={respostaSelecionada}
        />
        {respostaSelecionada && <Text style={styles.feedback}>
          {respostaSelecionada === perguntaAtual.resposta ? '✅ Correto!' : '❌ Errado!'}
        </Text>}
        <Text style={styles.instrucoes}>Deslize para a esquerda para próxima pergunta ➡️</Text>
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  contador: {
    fontSize: 16,
    marginBottom: 10,
  },
  feedback: {
    fontSize: 18,
    marginTop: 10,
  },
  instrucoes: {
    marginTop: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  }
});

export default QuizScreen;
