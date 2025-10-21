import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/homeStyles";

/**
 * @param {Object} navigation
 */

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tetrix</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>Iniciar Jogo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondary]}
        onPress={() => navigation.navigate("History")}
      >
        <Text style={styles.buttonText}>Histórico de Jogos</Text>
      </TouchableOpacity>

      <Text style={styles.small}>
        Use os botões na tela do jogo para controlar as peças.
      </Text>
    </View>
  );
}
