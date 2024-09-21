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

const CastingScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // State to control popup

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.Scroll}>
          <View style={styles.Content}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ alignItems: "center" }}
            >
              <ImageBackground
                source={require("../assets/Icon/BackButton.png")}
                style={{
                  width: 60,
                  height: 60,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.Title}>Casting</Text>
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
          <View
            style={{
              height: 85,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ImageBackground
                source={require("../assets/Component/Casting/Categories.png")}
                style={styles.Categories}
                resizeMode="contain"
              />
            </ScrollView>
          </View>

          <View style={{ flexDirection: "column", gap: 10 }}>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ProductScreen")}
              >
                <ImageBackground
                  source={require("../assets/Component/Casting/RockMaster.png")}
                  style={styles.Card}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <ImageBackground
                source={require("../assets/Component/Casting/TideCrusher.png")}
                style={styles.Card}
                resizeMode="contain"
              />
            </View>

            <View style={{ flexDirection: "row", gap: 4 }}>
              <ImageBackground
                source={require("../assets/Component/Casting/OceanEdge.png")}
                style={styles.Card}
                resizeMode="contain"
              />
              <ImageBackground
                source={require("../assets/Component/Casting/Shoreline.png")}
                style={styles.Card}
                resizeMode="contain"
              />
            </View>

            <View style={{ flexDirection: "row", gap: 4, marginBottom: 20 }}>
              <ImageBackground
                source={require("../assets/Component/Casting/LakeyFoty.png")}
                style={styles.Card}
                resizeMode="contain"
              />
              <ImageBackground
                source={require("../assets/Component/Casting/Gaitlit.png")}
                style={styles.Card}
                resizeMode="contain"
              />
            </View>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",

    flex: 1,
    backgroundColor: "#E3E6EC",
    alignItems: "center",
  },

  Scroll: {
    alignItems: "center",
  },

  Title: {
    fontSize: 30,

    color: "#1B5E80",
    fontFamily: "Corbert-Bold",
    paddingTop: 10,
    justifyContent: "center",
    lineHeight: 40,
    marginLeft: 30,
  },

  Content: {
    gap: 38,
    top: -10,
    justifyContent: "flex-start",

    flexDirection: "row",
    marginTop: 0,
    width: 380,
    alignItems: "center",

    marginBottom: 8,
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

  Categories: {
    width: 505,

    marginLeft: 10,
    height: 84,
  },

  Card: {
    width: 177,
    height: 289,
  },

  StyleImage: {
    width: 148,
    height: 148,
    zIndex: 1,
    top: -158,
    left: 12,
  },

  FishingStyleCardWidget: {
    zIndex: 3,
    position: "absolute",
    left: 165,
    top: 5,
    height: 162,
    justifyContent: "center",
    width: 175,
  },
  FishingStyleTitle: {
    fontSize: 20,
    fontFamily: "Corbert-Bold",
    color: "#1B5E80",
    textAlign: "left",
    position: "relative", // Ensures the text stays on top of other elements
    width: "auto", // Adjust this value to place the text correctly
    right: 0,
    zIndex: 2,
    lineHeight: 35,
  },

  FishingStyleParagraph: {
    fontFamily: "Corbert-Regular",
    fontSize: 12,
    width: "auto",
    lineHeight: 15,
    position: "relative",
    color: "#1f1f1f",
    zIndex: 2,
  },

  FishingStyleCard: {
    width: 356,
    height: 169,
  },
  Scrolling: {
    alignItems: "center",
    gap: 20,
  },

  FishingStyleColumn: {
    flexDirection: "column",
    width: 360,
    height: "auto",
    gap: 5,
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

export default CastingScreen;
