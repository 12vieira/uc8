import {Text, View, Pressable, StyleSheet } from 'react-native'
import { Link, router } from 'expo-router'
import { styles } from '../../styles/styles'

export default function Products(){
    const goToHome = () => {
        router.navigate('/')
    }
    return(
        <>  
        <View style={styles.container}>
            <Text style={styles.title}>Products Screen</Text>
            {/* <Link push href='/users' style={styles.text}>Voltar Usuários</Link>
            <Link navigate href='/' style={styles.text}>Voltar Início</Link>
            <Link href='/+not-found' style={styles.text}>Página de erro</Link> */}


            <Link style={styles.text} push href='/products/1'>Produto 1</Link>
            <Link style={styles.text} push href='/products/2'>Produto 2</Link>
            <Link style={styles.text} push href='/products/3'>Produto 3</Link>
        <Pressable onPress={goToHome} style={style.botaoVoltar}>
            <Text style={{ color: "#fff", fontSize: 30}}>Início</Text>
        </Pressable>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    botaoVoltar:{
        backgroundColor: "red",
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal:30
    }
})