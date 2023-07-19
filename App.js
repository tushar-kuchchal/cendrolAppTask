import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/home";
import Detaile from "./screen/detaile";
import { Provider } from "react-redux";
import store from "./store/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Home />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: "CendrolApp" }}
            name="home"
            component={Home}
          />
          <Stack.Screen name="details" component={Detaile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
