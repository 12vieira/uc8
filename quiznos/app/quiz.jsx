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
  const perguntaAtual = questions[index];

  const responder = (opcao) => {
    if (respostaSelecionada) return;
    setRespostaSelecionada(opcao);
    if (opcao === perguntaAtual.resposta) {
      setPontuacao((pontuacao) => pontuacao + 1);
    }
  };

  const proximaPergunta = () => {
    if (!respostaSelecionada) return;

    const acertou = respostaSelecionada === perguntaAtual.resposta;
    const novaPontuacao = acertou ? pontuacao + 1 : pontuacao;

    setRespostaSelecionada(null);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      router.push(`/resultado?pontuacao=${novaPontuacao}&total=${questions.length}`);
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
        style={{ marginBottom: 20 }}
      />
      {respostaSelecionada && (
        <Text
          style={[
            styles.feedback,
            { color: respostaSelecionada === perguntaAtual.resposta ? 'green' : 'red' },
          ]}
        >
          {respostaSelecionada === perguntaAtual.resposta ? '✅ Correto!' : '❌ Errado!'}
        </Text>
      )}
      <Pressable style={styles.botao} disabled={!respostaSelecionada} onPress={proximaPergunta}>
        <Text style={styles.textoBotao}>Próxima Pergunta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contador: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#555',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textShadowColor: '#000',
    textShadowOffset: { 
      width: 1, 
      height: 1 
    },
    textShadowRadius: 2,
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  feedback: {
    // fontSize: 18,
    // marginTop: 10,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#6200EE',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textShadowColor: '#000',
    textShadowOffset: { 
      width: 1, 
      height: 1 
    },
    textShadowRadius: 2,
  },
});
