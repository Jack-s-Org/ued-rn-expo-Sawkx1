import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDrawer from "./AppDrawer";
import profileImage from "../assets/Component/Profile/ProfileImage.png";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [image, setImage] = useState();

  const UploadImage = async (mode) => {
    try {
      let result = {};

      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        await saveImage(result.assets[0].uri);

        // save image
      }
    } catch (error) {
      alert("Error uploading Image" + error.message);
    }
  };

  const saveImage = async (uri) => {
    try {
      setImage(uri);
      setModalVisible(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AppDrawer>
      <SafeAreaView style={styles.container}>
        <View style={styles.Content}>
          <Text style={styles.Title}>Profile</Text>
        </View>
        <ScrollView style={{ flexDirection: "column" }}>
          {/* //Profile// */}
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <View>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <ImageBackground
                  source={require("../assets/Component/Profile/PersonalData.png")}
                  style={{
                    height: 95 / 1.1,
                    width: 271 / 1.1,
                  }}
                >
                  <View style={styles.profileTextContainer}>
                    <Text style={styles.profileName}>Chef Jeff</Text>
                    <Text style={styles.profileLocation}>Malaysia</Text>
                    <Text style={styles.profileViews}>(Views) 890</Text>
                  </View>
                </ImageBackground>

                <ImageBackground
                  source={require("../assets/Component/Profile/ProfileImageFrame.png")}
                  style={styles.profileImageFrame}
                >
                  <Image
                    source={image ? { uri: image } : profileImage}
                    style={styles.profileImage}
                  />
                </ImageBackground>
              </TouchableOpacity>

              {/* Modal */}

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Upload Profile Image</Text>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => UploadImage("camera")} // Directly call UploadImage
                      >
                        <ImageBackground
                          source={require("../assets/Component/Profile/ButtonBG.png")}
                          style={styles.buttonBackground}
                        >
                          <Text style={styles.buttonText}>Camera</Text>
                        </ImageBackground>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => UploadImage("gallery")} // Close the modal
                      >
                        <ImageBackground
                          source={require("../assets/Component/Profile/ButtonBG.png")}
                          style={styles.buttonBackground}
                        >
                          <Text style={styles.buttonText}>Gallery</Text>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>

            <ImageBackground
              source={require("../assets/Component/Profile/Likes.png")}
              style={{
                height: 103 / 1.1,
                width: 114 / 1.1,
                top: -3,
              }}
            />
          </View>
          {/* //Stats OverView// */}
          <Text style={styles.SectionTItle}>Stats OverView</Text>
          <View style={{ flexDirection: "row" }}>
            <ImageBackground
              source={require("../assets/Component/Profile/Bar.png")}
              style={{
                height: 226 / 1.1,
                width: 246 / 1.1,
                top: -3,
              }}
            />
            <ImageBackground
              source={require("../assets/Component/Profile/Rate.png")}
              style={{
                height: 226 / 1.1,
                width: 140 / 1.1,
                top: -3,
              }}
            />
          </View>

          {/* //Rank// */}
          <Text style={styles.SectionTItle}>Rank History</Text>
          <View style={{ flexDirection: "row" }}>
            <ImageBackground
              source={require("../assets/Component/Profile/RankHistoryBack.png")}
              style={{
                height: 233 / 1.14,
                width: 406 / 1.14,
                top: -3,
                alignItems: "center",
                padding: 20,
                overflow: "hidden",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: 240,
                  width: 330,
                  justifyContent: "center",

                  alignItems: "center",
                  paddingTop: 32,

                  overflow: "hidden",
                }}
              >
                <Image
                  source={require("../assets/Component/Profile/Year.png")}
                  style={{
                    height: 30 / 1.1,
                    width: 185 / 1.1,
                    top: -3,
                  }}
                />
                <ScrollView horizontal>
                  <Image
                    source={require("../assets/Component/Profile/Rank.png")}
                    style={{
                      height: 181 / 1.15,
                      width: 490 / 1.15,
                      top: -3,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  />
                </ScrollView>
              </View>
            </ImageBackground>
          </View>

          {/* //Caught Fish// */}
          <Text style={styles.SectionTItle}>Recent Caught</Text>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/Component/Profile/Recent Caught.png")}
              style={{
                height: 45 / 1.1,
                width: 259 / 1.1,
              }}
            />
            <Image
              source={require("../assets/Component/Profile/Fish Card.png")}
              style={{
                height: 532 / 1.16,
                width: 406 / 1.16,
                marginBottom: 20,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </AppDrawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E6EC",
    alignItems: "center",
  },
  Title: {
    fontSize: 30,
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
  profileTextContainer: {
    width: 80,
    height: 75,
    alignSelf: "flex-end",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 8,
  },
  profileName: {
    textAlign: "left",
    paddingRight: 15,
    fontFamily: "Corbert-Bold",
    lineHeight: 20,
    fontSize: 12,
  },
  profileLocation: {
    textAlign: "left",
    paddingRight: 15,
    fontFamily: "Corbert-Medium",
    lineHeight: 14,
    fontSize: 10,
  },
  profileViews: {
    textAlign: "left",
    paddingRight: 15,
    fontFamily: "Corbert-Medium",
    lineHeight: 16,
    fontSize: 8,
  },
  profileImageFrame: {
    height: 135 / 1.1,
    width: 135 / 1.1,
    position: "absolute",
    left: 20,
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    top: 1,
    left: 1,
    height: 106 / 1.1,
    width: 106 / 1.1,
    borderRadius: 500,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    fontFamily: "Corbert-Bold",
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 5,

    fontFamily: "Corbert-Bold",
    lineHeight: 20,
    fontSize: 18,
    color: "#1B5E80",
  },
  buttonText: {
    fontFamily: "Corbert-Medium",
    lineHeight: 20,
    left: 2,
    top: 2,
  },
  buttonBackground: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  SectionTItle: {
    fontFamily: "Corbert-Bold",
    fontSize: 20,
    lineHeight: 25,
    marginTop: 10,
    color: "#1B5E7F",
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default ProfileScreen;
