import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AquaScopeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AquaScope</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3E6EC",
  },
});

export default AquaScopeScreen;
