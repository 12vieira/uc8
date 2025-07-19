import {useLocalSearchParams} from 'expo-router'
import {View, Text} from 'react-native'
import { styles } from '../../styles/styles';



export default function Products(){
    const {id} = useLocalSearchParams();
    return(
        <View style={styles.container} >
            <Text style={styles.title} >Details</Text>
            <Text style={styles.text} >Product: {id}</Text>
        </View>
        
    )

}