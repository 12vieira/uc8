import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuestionCard = ({ pergunta, opcoes, onResponder, respostaSelecionada }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.pergunta}>{pergunta}</Text>
      {opcoes.map((opcao, idx) => (
        <TouchableOpacity
          key={idx} // adiciona uma chave única para cada opção
          style={[
            styles.opcao,
            respostaSelecionada && opcao === respostaSelecionada && styles.opcaoSelecionada,
          ]}
          onPress={() => onResponder(opcao)} // chama a função de resposta ao clicar
          activeOpacity={0.7} // efeito visual ao pressionar
          disabled={!!respostaSelecionada} // bloqueia troca após responder
        >
          <Text>{opcao}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 20, 
    backgroundColor: '#f3f3f3', 
    borderRadius: 10, 
    marginVertical: 20 
  },
  pergunta: { 
    fontSize: 18, 
    marginBottom: 15 
  },
  opcao: { 
    padding: 10, 
    backgroundColor: '#ddd', 
    borderRadius: 5, 
    marginVertical: 5 
  },
  opcaoSelecionada: { 
    backgroundColor: '#bde0fe' 
  },
});

export default QuestionCard;
