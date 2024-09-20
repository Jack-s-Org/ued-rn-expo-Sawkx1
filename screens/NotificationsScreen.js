import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Notifications</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
});

export default NotificationsScreen;
