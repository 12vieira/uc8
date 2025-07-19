import {Tabs} from 'expo-router'

export default function TabsLayout(){
  return(
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#e94560" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarStyle:{
          backgroundColor: '#000',
        }
      }}
    >
      <Tabs.Screen name='index' options={{ headerTitle: 'home' }} />
    </Tabs>
  )
}