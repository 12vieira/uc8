import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#e94560" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {backgroundColor: 'red'}
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon:({color,focused}) => (<AntDesign name="home" size={24} color={focused ? "orange" : "white"} />)
          
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon:({color,focused}) => (<AntDesign name="setting" size={24} color={focused ? "orange" : "white"} />)
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon:({color, focused}) => (<AntDesign name="search1" size={24} color={focused ? "orange" : "white"} />)
        }}
      />
      <Tabs.Screen
        name="products/produtos"
        options={{
          title: "Produtos",
          tabBarIcon:({color, focused}) => (<AntDesign name="shoppingcart" size={24} color={focused ? "orange" : "white"} />)
        }} 
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon:({color, focused}) => (<AntDesign name="user" size={24} color={focused ? "orange" : "white"} />)
        }} 
      />
    </Tabs>
  );
}
