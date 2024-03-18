import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import PreGame from "./Pages/PreGame";
import Game from "./Pages/Game";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Magic App" }}
        />
        <Stack.Screen
          name="PreGame"
          component={PreGame}
          options={{ statusBarHidden: true, title: "" }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ statusBarHidden: true, title: "", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
