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

const LakeFishingScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // State to control popup

  return (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.Title}>Lake Fishing</Text>
      </View>

      {/* <Filter Section> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 5,
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

      {/* <Selecting Section> */}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          gap: 0,
          paddingBottom: 20,
          width: 360,
        }}
      >
        <View style={styles.FishingStyleColumn}>
          <View style={{ height: 175 }}>
            <ImageBackground
              source={require("../assets/Component/Lake Fishing/FishingStyleCard.png")}
              style={styles.FishingStyleCard}
            />
            <ImageBackground
              source={require("../assets/Component/Lake Fishing/BankFishing.png")}
              style={styles.StyleImage}
            />

            <View style={styles.FishingStyleCardWidget}>
              <Text style={styles.FishingStyleTitle}>Bank Fishing</Text>
              <Text style={styles.FishingStyleParagraph}>
                Fishing from the shore of a lake, often targeting species close
                to the edge.
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 175,

              position: "relative",
            }}
          >
            <ImageBackground
              source={require("../assets/Component/Lake Fishing/FishingStyleCard.png")}
              style={styles.FishingStyleCard}
            />
            <ImageBackground
              source={require("../assets/Component/Lake Fishing/FloatFishing.png")}
              style={styles.StyleImage}
            />
            <View style={styles.FishingStyleCardWidget}>
              <Text style={styles.FishingStyleTitle}>Float Fishing</Text>
              <Text style={styles.FishingStyleParagraph}>
                Using a float to suspend bait at a specific depth, effective for
                a variety of lake fish.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CastingScreen")}
          >
            <View style={{ height: 175 }}>
              <ImageBackground
                source={require("../assets/Component/Lake Fishing/FishingStyleCard.png")}
                style={styles.FishingStyleCard}
              />

              <ImageBackground
                source={require("../assets/Component/Lake Fishing/Casting.png")}
                style={styles.StyleImage}
              />

              <View style={styles.FishingStyleCardWidget}>
                <Text style={styles.FishingStyleTitle}>Casting</Text>
                <Text style={styles.FishingStyleParagraph}>
                  Repeatedly casting and retrieving lures to cover more water
                  and attract active fish.
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ height: 175 }}>
            <ImageBackground
              source={require("../assets/Component/Lake Fishing/FishingStyleCard.png")}
              style={styles.FishingStyleCard}
            />
            <ImageBackground
              source={require("../assets/Component/Lake Fishing/SpinnerFishing.png")}
              style={styles.StyleImage}
            />

            <View style={styles.FishingStyleCardWidget}>
              <Text style={styles.FishingStyleTitle}>Spinner Fishing</Text>
              <Text style={styles.FishingStyleParagraph}>
                Using spinning lures that create vibrations and flashes to
                attract fish, especially in clearer waters.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <Selecting Section> */}
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

  Title: {
    fontSize: 30,

    color: "#1B5E80",
    fontFamily: "Corbert-Bold",
    paddingTop: 10,
    justifyContent: "center",
    lineHeight: 40,
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

export default LakeFishingScreen;
