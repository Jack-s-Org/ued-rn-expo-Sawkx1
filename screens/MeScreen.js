import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Me</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});

export default MeScreen;
