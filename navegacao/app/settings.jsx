import {View, Text} from 'react-native'
import { Link } from 'expo-router'
import { styles } from '../styles/styles'

export default function Settings(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Page Settings</Text>
            <Link push href='/users' style={styles.text}>Voltar Usuários</Link>
            <Link navigate href='/' style={styles.text}>Voltar Início</Link>
            <Link href='/+not-found' style={styles.text}>Página de erro</Link>
        </View>
    )
}