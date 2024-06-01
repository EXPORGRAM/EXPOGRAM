import { Platform } from "react-native";
import BottomTab from "./BottomTab";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();

const SignedInStack = () => {
  return (
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="MainScreen" component={BottomTab} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
  );
};

export default SignedInStack;