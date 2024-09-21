import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoardingScreen = ({ navigation }) => {
  const [sequence, setSequence] = useState(0);
  const animatedValue = useRef(new Animated.Value(1)).current;

  const handleContinue = () => {
    if (sequence === 2) {
      navigation.replace("Main");
    } else {
      // Handle the animation for the sequence change
      Animated.timing(animatedValue, {
        toValue: 0, // Fade out
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setSequence((prev) => prev + 1); // Increment sequence
        Animated.timing(animatedValue, {
          toValue: 1, // Fade in
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const cardData = [
    {
      image: require("../assets/Component/OnBoarding/Technology.png"),
      title: "Fish With Technology",
      paragraph:
        "Experience the underwater world with Aqua Scope: Real-time views from the tip of your fishing rod",
    },
    {
      image: require("../assets/Component/OnBoarding/Shop.png"),
      title: "Shop With Ease",
      paragraph:
        "Shop with Ease: Select products to compare specs instantly, making smarter shopping decisions effortlessly",
    },
    {
      image: require("../assets/Component/OnBoarding/Compete.png"),
      title: "Compete With Others",
      paragraph:
        "Global rankings based on data from your fishing journeys for ultimate bragging rights",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ opacity: animatedValue }}>
        <Image source={cardData[sequence].image} style={styles.BlobCard} />
        <Text style={styles.Title}>{cardData[sequence].title}</Text>
        <Text style={styles.Paragraph}>{cardData[sequence].paragraph}</Text>
      </Animated.View>

      <ImageBackground
        source={require("../assets/Component/OnBoarding/BarBG.png")}
        style={styles.Bar}
      >
        <Animated.View
          style={{
            opacity: animatedValue,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Bar Indicators */}
          {cardData.map((_, index) => (
            <Image
              key={index}
              source={
                index === sequence
                  ? require("../assets/Component/OnBoarding/BlueBar.png")
                  : require("../assets/Component/OnBoarding/Circle.png")
              }
              style={index === sequence ? styles.BlueBar : styles.Circle}
            />
          ))}
        </Animated.View>
      </ImageBackground>

      <TouchableOpacity onPress={handleContinue}>
        <Image
          source={
            sequence === 2
              ? require("../assets/Component/OnBoarding/GetStarted.png")
              : require("../assets/Component/OnBoarding/Continue.png")
          }
          style={styles.Continue}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Styles...

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: "15%",
  },
  BlobCard: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  Title: {
    fontFamily: "Corbert-Bold",
    color: "#1B5E7F",
    fontSize: 23,
    lineHeight: 40,
    textAlign: "center",
  },
  Paragraph: {
    fontFamily: "Corbert-Medium",
    color: "#444444",
    fontSize: 14,
    width: 290,
    textAlign: "center",
  },
  Bar: {
    marginTop: 20,
    width: 78,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  BlueBar: {
    width: 26,
    height: 10,
  },
  Circle: {
    marginTop: 2,
    width: 11,
    height: 11,
  },
  Continue: {
    marginTop: 20,
    width: 273,
    height: 50,
  },
});

export default OnBoardingScreen;
