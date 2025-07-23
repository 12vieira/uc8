import{Text, View, Image} from 'react-native'
import {styles}  from '../styles/styles'

export default function Perfil(){
    return(
        <View style={styles.containerPerfil}>
            <Image source={require('../assets/user.png')} style={styles.avatar} />

            <Text style={styles.nomeUsuario}>Matheus Vieira</Text>

            <Text style={styles.descricaoUsuario}>Aluno do SENAC de informática</Text>

            <View style={styles.divisor} />
        </View>
    )
}