import { View, StyleSheet, Text} from "react-native"
import { Link } from "expo-router"

export default function Products(){
    return(
        <View style={styles.container}>
            <Text>Tela de Produtos</Text>
        </View>
    )
}

const styles = StyleSheet.create({      
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
