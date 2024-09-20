import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Discover</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
});

export default DiscoverScreen;
