import {View, Text} from 'react-native'
import { Link } from 'expo-router'
import { styles } from '../styles/styles'

export default function Home(){

    return(
        <View style={styles.container}>
            <Text style={styles.text} >Bem-vindo!</Text>
            <Link href='/settings' style={styles.text}>Ir para Configurações</Link>
            <Link href='/users' style={styles.text}>Ir para Usuários</Link>
            <Link href='/products' style={styles.text}>Ir para Produtos</Link>
        </View>
    )
}