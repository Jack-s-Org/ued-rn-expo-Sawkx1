import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// fully self-managed custom tab bar
// use this ONLY if you have an unconventional layout for the tab bar
const UnconventionalCustomTabBar = ({ state, descriptors, navigation }) => {
  // this is the name of the active tab, it matches the "name" prop you gave to each Tab.Screen at MainScreens.js
  const activeRouteName = state.routeNames[state.index];

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => {
          navigation.navigate("Home"); // manually set which screen to navigate to
        }}
      >
        <Text
          style={{
            color: activeRouteName === "Home" ? "#fff" : "#000", // manually check if the active tab is the same as this button's screen name
          }}
        >
          Home {/** manually set the label */}
        </Text>
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.tabBarItem}
          onPress={() => {
            navigation.navigate("Discover");
          }}
        >
          <Text
            style={{ color: activeRouteName === "Discover" ? "#fff" : "#000" }}
          >
            Discover
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabBarItem}
          onPress={() => {
            navigation.navigate("Inbox");
          }}
        >
          <Text
            style={{ color: activeRouteName === "Inbox" ? "#fff" : "#000" }}
          >
            Inbox
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 8,
    margin: 16,
    padding: 16,
    backgroundColor: "transparent",
  },
  tabBarItem: {
    padding: 16,
  },
});

export default UnconventionalCustomTabBar;
