import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#e94560" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        
        <Stack.Screen name="(tabs)" options={{ headerTitle: "Home" }} />
        

{/* O ERRO DEVE SER O ULTIMO  */}
        {/* <Stack.Screen
          name="+not-found"
          options={{ headerTitle: "Erro" }}
        /> */}
     
      </Stack>
    </>
  );
}
