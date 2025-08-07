import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import QuestionCard from '../components/QuestionCard';
import questions from '../data/questions';

export default function QuizScreen() {
  const [index, setIndex] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const router = useRouter();
  const perguntaAtual = questions[index]; // pega a pergunta atual com base no índice

  const responder = (opcao) => { //
    if (respostaSelecionada) return; //
    setRespostaSelecionada(opcao);
    if (opcao === perguntaAtual.resposta) { //
      setPontuacao(pontuacao + 1);
    }
  };

  const proximaPergunta = () => {
    if (!respostaSelecionada) return; //
    setRespostaSelecionada(null); 
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      router.push({
        pathname: '/resultado',
        params: { //
          pontuacao: pontuacao.toString(), //
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
      <Pressable style={styles.botao} disabled={!respostaSelecionada} onPress={proximaPergunta}>
        <Text style={styles.textoBotao}>
          Próxima Pergunta
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  contador: { 
    fontSize: 16, 
    marginBottom: 10 
  },
  feedback: { 
    fontSize: 18, 
    marginTop: 10 
  },
  instrucoes: { 
    marginTop: 20, 
    fontStyle: 'italic', 
    textAlign: 'center' 
  },
  botao: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
