import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "./Components/VideoPlayer";
import HomeScreen from "./screens/HomeScreen";
import MainScreens from "./screens/MainScreens";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreen from "./screens/OnBoarding";
import { LogBox } from "react-native";

// Disable all log warnings
LogBox.ignoreAllLogs();

// const Icon = createIconSetFromIcoMoon(
//   require("./assets/Rank/selection.json"),
//   "IcoMoon",
//   "icomoon.ttf"
// );

export default function App() {
  const [fontsLoaded] = useFonts({
    // IcoMoon: require("./assets/Rank/icomoon.ttf"),
    "Corbert-Bold": require("./assets/Font/Corbert-Bold.otf"),
    "Corbert-DemiBold": require("./assets/Font/Corbert-DemiBold.otf"),
    "Corbert-Medium": require("./assets/Font/Corbert-Medium.otf"),
    "Corbert-Regular": require("./assets/Font/Corbert-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  // return <RootNavigator />;
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}
