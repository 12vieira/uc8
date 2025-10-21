import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/historyStyles";

/**
 * @param {Object} navigation
 */

export default function HistoryScreen({ navigation }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      load();
    });

    load();
    return unsubscribe;
  }, [navigation]);

  async function load() {
    try {
      const raw = await AsyncStorage.getItem("@tetrix_history");
      const arr = raw ? JSON.parse(raw) : [];
      setHistory(arr);
    } catch (e) {
      console.warn("Erro ao carregar histórico:", e);
    }
  }

  async function clearAll() {
    await AsyncStorage.removeItem("@tetrix_history");
    setHistory([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.btnBack}
        >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Histórico</Text>

        <TouchableOpacity onPress={clearAll} style={styles.btnClear}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={history}
        keyExtractor={(item, idx) => item.date + idx}
        contentContainerStyle={styles.scrollContainer}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.date}>
                {new Date(item.date).toLocaleString()}
              </Text>
              <Text style={styles.meta}>
                Score: {item.score} - Level: {item.level}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum jogo registrado</Text>
        }
      />
    </View>
  );
}
