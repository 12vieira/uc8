import {View, Text} from 'react-native'
import { Link } from 'expo-router'
import { styles } from '../styles/styles'

export default function Users(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Page Users</Text>
            <Link href='/settings' style={styles.text}>Voltar Configurações</Link>
            <Link href='/' style={styles.text}>Voltar Início</Link>
        </View>
    )
}