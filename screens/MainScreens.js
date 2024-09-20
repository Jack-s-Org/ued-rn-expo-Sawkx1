import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import CustomTabBar from "@/components/CustomTabBar";
import UnconventionalCustomTabBar from "@/components/UnconventionalCustomTabBar";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <AppDrawer navigation={navigation}>
      <SafeAreaView style={{ height: "100%" }}>
        <Tab.Navigator
          tabBar={(props) => <UnconventionalCustomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#dadada",
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#a0a0a0",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
              tabBarLabel: "Home",
            }}
          />

          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" size={size} color={color} />
              ),
              tabBarLabel: "Discover",
            }}
          />

          <Tab.Screen
            name="AddTab"
            component={Empty} // this is a workaround to show a full screen when this tab is pressed
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="add" size={36} color={color} />
              ),
              tabBarLabel: () => null,
            }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault(); // stop default navigation
                navigation.navigate("Add"); // manually navigate to the stack screen outside of the tab navigators
              },
            }}
          />

          <Tab.Screen
            name="Inbox"
            component={NotificationsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbox" size={size} color={color} />
              ),
              tabBarLabel: "Inbox",
              tabBarBadge: unreadCount,
            }}
            listeners={{
              tabPress: () => {
                setUnreadCount(null);
              },
            }}
          />

          <Tab.Screen
            name="SettingsDrawer"
            component={MeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
              tabBarLabel: "Me",
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </AppDrawer>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
