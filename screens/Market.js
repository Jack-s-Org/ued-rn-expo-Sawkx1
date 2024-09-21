import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import App from "@/App";
import AppDrawer from "./AppDrawer";

const MarketScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // State to control popup

  return (
    <AppDrawer>
      <SafeAreaView style={styles.container}>
        <View style={styles.Content}>
          <Text style={styles.Title}>Market</Text>
        </View>

        {/* <Filter Section> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            height: 50,
          }}
        >
          <ImageBackground
            source={require("../assets/Component/Market/Search Bar/Search_Enviroment.png")}
            style={styles.SearchBar}
          />

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <ImageBackground
              source={require("../assets/Component/Market/Search Bar/Filter.png")}
              style={styles.Sorting}
            />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Back button on Android closes the modal
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1} // Ensures tapping inside doesn't trigger close
            onPressOut={() => setModalVisible(false)} // Close modal when touched outside
          >
            <View style={styles.modalContent}>
              {/* Inside popup content - doesn't trigger modal close */}
              <ImageBackground
                source={require("../assets/Component/Market/Search Bar/PopUp.png")}
                style={{
                  width: 284,
                  height: 458,
                }}
              />
            </View>
          </TouchableOpacity>
        </Modal>

        <View style={{ flexDirection: "row", marginBottom: 10, gap: 5 }}>
          <ImageBackground
            source={require("../assets/Component/Market/Search Bar/DepartmentButton.png")}
            style={{
              width: 170,
              height: 40,
            }}
          />
          <ImageBackground
            source={require("../assets/Component/Market/Search Bar/EnviromentButton.png")}
            style={{
              width: 175,
              height: 40,
            }}
          />
        </View>
        {/* <Filter Section> */}

        {/* <Selecting Section> */}
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            gap: 0,
            paddingBottom: 10,
            width: 360,
          }}
        >
          <View style={styles.EnviromentRow}>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("../assets/Component/Market/Sea_Fishing.png")}
                style={styles.FishingEnviroment}
              />
              <Text style={styles.EnviromentText}>Sea Fishing</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("LakeFishingScreen")}
                style={{ alignItems: "center" }}
              >
                <ImageBackground
                  source={require("../assets/Component/Market/Lake_Fishing.png")}
                  style={styles.FishingEnviroment}
                />
                <Text style={styles.EnviromentText}>Lake Fishing</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* ------------------------------------------- */}
          <View style={{ flexDirection: "row", height: 209, gap: 5 }}>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("../assets/Component/Market/River_Fishing.png")}
                style={{ width: 165, height: 160 }}
              />
              <Text style={styles.EnviromentText}>River Fishing</Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("../assets/Component/Market/Coastal_Fishing.png")}
                style={{ width: 165, height: 160 }}
              />
              <Text style={styles.EnviromentText}>Coastal Fishing</Text>
            </View>
          </View>

          {/* ------------------------------------------- */}
          <View style={styles.EnviromentRow}>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("../assets/Component/Market/Pond_Fishing.png")}
                style={styles.FishingEnviroment}
              />
              <Text style={styles.EnviromentText}>Pond Fishing</Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("../assets/Component/Market/Estuary_Fishing.png")}
                style={styles.FishingEnviroment}
              />
              <Text style={styles.EnviromentText}>Estuary Fishing</Text>
            </View>
          </View>
        </ScrollView>
        {/* <Selecting Section> */}
      </SafeAreaView>
    </AppDrawer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",

    flex: 1,
    backgroundColor: "#E3E6EC",
    alignItems: "center",
  },

  Title: {
    fontSize: 30,

    alignItems: "center",
    color: "#1B5E80",

    fontFamily: "Corbert-Bold",
    lineHeight: 40,
    justifyContent: "center",
  },

  Content: {
    marginTop: 5,
    width: 380,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  SearchBar: {
    flexDirection: "row",
    width: 300,
    height: 45,
  },

  Sorting: {
    width: 55,
    height: 55,
    top: -5,
  },

  FishingEnviroment: {
    width: 160,
    height: 170,
  },

  EnviromentText: {
    fontFamily: "Corbert-Bold",
    fontSize: 20,
    lineHeight: 40,
    color: "#1B5E80",
    marginTop: -5,
  },

  Scrolling: {
    alignItems: "center",
    gap: 20,
  },

  EnviromentRow: {
    flexDirection: "row",
    height: 219,
    gap: 15,
  },

  // Modal Styles
  modalContainer: {
    position: "absolute", // Cover the entire screen including SafeAreaView
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: 284,
    height: 458,
  },
});

export default MarketScreen;
