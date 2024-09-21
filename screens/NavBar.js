import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// const NavBarBG = require("../assets/Icon/NavBar.png");

function NavBar({ state, descriptors, navigation }) {
  return (
    <View style={TabBarstyles.tabBarContainer}>
      <ImageBackground
        source={require("../assets/Icon/Navbar.png")}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: 100,
          bottom: 0,
        }}
      ></ImageBackground>

      {state.routes.map((route, index) => {
        console.log(route);

        const { options } = descriptors[route.key];
        const icon =
          options.tabBarIcon !== undefined
            ? options.tabBarIcon
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        console.log("isFocused", isFocused);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        console.log("========");

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {icon({ isFocused })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabBarstyles = StyleSheet.create({
  tabBarContainer: {
    alignItems: "center",
    height: 90,
    width: "100%",
    flexDirection: "row",
    overflow: "visible",
  },

  // tabBar: {
  //   padding: 0,
  //   backgroundColor: "blue", // Ensure the tab bar itself is transparent
  // },
});

export default NavBar;
