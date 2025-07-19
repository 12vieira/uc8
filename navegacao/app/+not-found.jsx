import { View, Text, } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../styles/styles';

export default function NotFound() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página não encontrada</Text>
            <Text style={styles.message}>Desculpe, não conseguimos encontrar o que você procura.</Text>
            <Link replace href='/' style={styles.text}>Voltar para o início</Link>
        </View>
    );
}
