// Tabuleiro do jogo

import { View } from "react-native";
import Cell from "./Cell";
import { styles } from "../styles/boardStyles";

/**
 * @param {Array} grid
 *
 * @param {boolean} small
 */

export default function Board({ grid, small = false }) {
  return (
    <View style={[styles.board, small ? styles.smallBoard : null]}>
      {grid.map((row, rIdx) => (
        <View key={`r${rIdx}`} style={styles.row}>
          {row.map((cell, cIdx) => (
            <Cell key={`${rIdx}-${cIdx}`} color={cell} small={small} />
          ))}
        </View>
      ))}
    </View>
  );
}
