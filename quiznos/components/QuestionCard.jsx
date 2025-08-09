import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const QuestionCard = ({ pergunta, opcoes, onResponder, respostaSelecionada }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.pergunta}>{pergunta}</Text>
      {opcoes.map((opcao, idx) => (
        <Pressable key={idx} style={[styles.opcao, respostaSelecionada && opcao === respostaSelecionada && styles.opcaoSelecionada]}
          onPress={() => onResponder(opcao)} // chama a função de resposta ao clicar
          //android_ripple={{ color: '#ddd' }} // efeito visual ao pressionar no Android
          disabled={!!respostaSelecionada} // bloqueia troca após responder
        >
          <Text>{opcao}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 20, 
    backgroundColor: '#f3f3f3', 
    borderRadius: 10, 
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 20,
    borderWidth: 1, 
  },
  pergunta: { 
    fontSize: 18, 
    marginBottom: 20,
    color: '#333',
    lineHeight: 24, // aumenta o espaçamento entre linhas
    letterSpacing: 0.5, // espaçamento entre letras
    textTransform: 'capitalize', // deixa a primeira letra maiúscula
    textShadowColor: '#000', // sombra do texto 
    textShadowOffset: { 
      width: 1, 
      height: 1 
    }, // deslocamento da sombra
    textShadowRadius: 2, // raio da sombra
  },
  opcao: { 
    // padding: 10, 
    // backgroundColor: '#ddd', 
    // borderRadius: 5, 
    // marginVertical: 5
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#e1e8ed',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, 
    padding: 15,
    fontSize: 16,
  },
  opcaoSelecionada: { 
    // backgroundColor: '#bde0fe'
    backgroundColor: '#e3f2fd',
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#2196f3',
    shadowColor: '#2196f3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
});

export default QuestionCard;
