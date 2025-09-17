
import { StyleSheet } from "react-native";

/**
 * @param {object} theme - Tema atual com cores
 * @param {number} fontScale - Escala de fonte para acessibilidade
 * @param {boolean} bigTargets - Se alvos grandes estão ativados
 * Gera estilos globais baseados nas configurações de acessibilidade
 */

export const makeGlobalStyles = ({ theme, fontScale, bigTargets }) => {
  
    const base = 16*fontScale; // Tamanho base da fonte
    const padding = bigTargets ? 16 : 10; // Tamanho base da fonte
    const radius = 16; // Tamanho base da fonte
  
    return StyleSheet.create({
    app:{
        flex: 1,
        backgroundColor: theme.background
    },
    header: {
      paddingHorizontal: 16,
      paddingVertical: bigTargets ? 20 : 12,
      backgroundColor: theme.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerTitle: {
      color: "theme.text",
      fontSize: base * 1.1,
      fontWeight: "700",
    },
    tabBar: {
      flexDirection: "row",
      gap: bigTargets ? 24 : 16,
      padding: bigTargets ? 16 : 10,
      backgroundColor: theme.card,
      borderBottomColor: theme.border,
      borderBottomWidth: 1,
      alignItems: "center",
      justifyContent: "space-around",
    },
    tabBtn:{
        flex: 1,
        paddingVertical: bigTargets ? 12 : 8,
        alignItems: "center",
        justifyContent: "center",   
        paddingHorizontal: bigTargets ? 12 : 8,
        borderRadius: radius,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    tabBtnActive:{
        borderColor: theme.primary,
        backgroundColor: theme.primary + '22',
    },
    tabBtnText:{
        fontSize: base * 0.95,
        fontWeight: "700",
        color: "theme.text",
    },
    lockNowBtn:{
        backgroundColor: theme.primary,
        borderRadius: radius,
        paddingVertical: padding,
        paddingHorizontal: bigTargets ? 20 : 12,
        alignItems: "center",
        justifyContent: "center",
    },
    lockNowBtnText:{
        color: "theme.onPrimary",
        fontSize: base * 0.9,
        fontWeight: "700",
    },
    content: {
        flex: 1,
        padding: 16,
    },
  });
}