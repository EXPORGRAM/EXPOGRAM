import { Platform } from "react-native";
import BottomTab from "./BottomTab";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import HomeScreen from "../Screens/HomeScreen";
import { UserProvider } from "../../Context/UserContext";
import MediaLibrary from "../Screens/MediaLibrary";
import NewPost from "../Screens/NewPost";

const Stack = createStackNavigator();

const SignedInStack = () => {
  return (
    <UserProvider>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Main Screen" component={BottomTab} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen
                name="MediaLibrary"
                component={MediaLibrary}
                options={{
                  gestureEnabled: false,
                  animation: "slide_from_left",
                }}
              />
              <Stack.Screen
                name="NewPost"
                component={NewPost}
                options={{
                  animation: "slide_from_right",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
        </UserProvider>
  );
};

export default SignedInStack;