
import {Text, View, StyleSheet} from 'react-native'
import { Link } from 'expo-router';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Tela Inicial</Text>
            <Link href="products/produtos">Ir para Produtos</Link>
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