import {createNativeStackNavigator} from "@react-navigation/native-stack"

import HomeScreen from "./HomeScreen"
import GameScreen from "./GameScreen"
import HistoryScreen from "./HistoryScreen"

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Game" component={GameScreen}/>
            <Stack.Screen name="History" component={HistoryScreen}/>
        </Stack.Navigator>
    )
}