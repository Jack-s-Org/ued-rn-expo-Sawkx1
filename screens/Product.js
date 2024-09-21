import React, { useState } from "react";
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

const ProductScreen = () => {
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false); // Initialize state to track the image

  const FavouritePress = () => {
    // Toggle between two images on press
    setIsFavourite(!isFavourite);
  };

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
        <TouchableOpacity
          style={{
            width: "68%",
            alignItems: "flex-end",
          }}
          onPress={FavouritePress} // Trigger the state change on press
        >
          <ImageBackground
            source={
              isFavourite
                ? require("../assets/Component/Product Detail/Favourite_Clicked.png") // Active image
                : require("../assets/Component/Product Detail/Favourite.png") // Default image
            }
            style={{
              width: 70,
              height: 70,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.Title}></Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={{ height: 386 }}
        >
          <ImageBackground
            source={require("../assets/Component/Product Detail/ProductImage.png")}
            style={{
              width: 2387 / 1.5,
              height: 356 / 1.5,

              marginLeft: 20,
            }}
            resizeMode="contain"
          />
        </ScrollView>
        <ScrollView>
          <ImageBackground
            source={require("../assets/Component/Product Detail/Product_Spec.png")}
            style={{
              width: 455 / 1.15,
              height: 886 / 1.2,
            }}
          >
            <Image
              source={require("../assets/Component/Product Detail/Model.png")}
              style={{
                width: 480,
                height: 40,
                left: -10,
                top: 240,
              }}
              resizeMode="contain"
            />
          </ImageBackground>
        </ScrollView>
      </View>

      {/* <Filter Section> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",

    flex: 1,
    backgroundColor: "#E3E6EC",
    alignItems: "flex-start",
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
    top: -15,
    justifyContent: "flex-start",

    flexDirection: "row",
    marginTop: 0,
    width: 380,
    alignItems: "center",

    marginBottom: 8,
  },
});

export default ProductScreen;
