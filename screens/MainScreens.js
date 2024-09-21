import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./Profile";
import MarketScreen from "./Market";
import SettingsScreen from "./SettingsScreen";
import AquaScopeScreen from "./AquaScope";
import CartScreen from "./Cart";
import LakeFishingScreen from "./LakeFishing";
import CastingScreen from "./Casting";
import ProductScreen from "./Product";

import NavBar from "./NavBar";
import { Image } from "react-native";

// Icons
import HomeIcon from "../assets/Icon/Home.png";
import HomeIconFocused from "../assets/Icon/Home_Clicked.png";
import CartIcon from "../assets/Icon/Cart.png";
import CartIconFocused from "../assets/Icon/Cart_Clicked.png";
import MarketIcon from "../assets/Icon/Market.png";
import MarketIconFocused from "../assets/Icon/Market_Clicked.png";
import AquaScopeIcon from "../assets/Icon/AquaScope.png";
import AquaScopeIconFocused from "../assets/Icon/AquaScope_Clicked.png";
import ProfileIcon from "../assets/Icon/Profile.png";
import ProfileIconFocused from "../assets/Icon/Profile_Clicked.png";

const MainStacks = createNativeStackNavigator();
const MarketStacks = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MarketTab = () => (
  <MarketStacks.Navigator>
    <MarketStacks.Screen
      name="MarketScreen"
      component={MarketScreen}
      options={{ headerShown: false }}
    />
    <MarketStacks.Screen
      name="LakeFishingScreen"
      component={LakeFishingScreen}
      options={{ headerShown: false }}
    />
    <MarketStacks.Screen
      name="CastingScreen"
      component={CastingScreen}
      options={{ headerShown: false }}
    />
    <MarketStacks.Screen
      name="ProductScreen"
      component={ProductScreen}
      options={{ headerShown: false, tabBarStyle: { display: "none" } }}
    />
  </MarketStacks.Navigator>
);

const MainTabs = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#E3E6EC" }}>
    <Tab.Navigator
      tabBar={(props) => <NavBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Market"
        component={MarketTab}
        options={{
          tabBarIcon: ({ isFocused }) => (
            <Image
              source={isFocused ? MarketIconFocused : MarketIcon}
              style={{ width: 70, height: 68 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ isFocused }) => (
            <Image
              source={isFocused ? HomeIconFocused : HomeIcon}
              style={{ width: 70, height: 68 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AquaScope"
        component={AquaScopeScreen}
        options={{
          tabBarIcon: ({ isFocused }) => (
            <Image
              source={isFocused ? AquaScopeIconFocused : AquaScopeIcon}
              style={{ width: 70, height: 68 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ isFocused }) => (
            <Image
              source={isFocused ? CartIconFocused : CartIcon}
              style={{ width: 70, height: 68 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ isFocused }) => (
            <Image
              source={isFocused ? ProfileIconFocused : ProfileIcon}
              style={{ width: 70, height: 68 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </SafeAreaView>
);

const MainScreens = () => (
  <MainStacks.Navigator>
    <MainStacks.Screen
      name="MainTabs"
      component={MainTabs}
      options={{ headerShown: false }}
    />
    <MainStacks.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ animation: "fade_from_bottom" }}
    />
  </MainStacks.Navigator>
);

export default MainScreens;
