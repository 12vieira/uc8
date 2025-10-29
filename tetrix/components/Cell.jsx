import { View } from "react-native";
import { styles } from "../styles/boardStyles";

/**
 * @param {string|number} color
 * @param {boolean} small
 */

export default function Cell({ color, small = false }) {
  const style = [
    styles.cell,
    small ? styles.cellSmall : null,
    color
      ? { background: color }
      : {
          backgroundColor: "transparent",
          borderWidth: 0.6,
          borderColor: "#122233",
        },
  ];
  return <View style={style} />;
}
