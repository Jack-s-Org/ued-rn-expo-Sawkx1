import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={StyleSheet.absoluteFill}
        // source={{
        //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        // useNativeControls={false}
        // shouldPlay
        resizeMode={ResizeMode.COVER}
        // isLooping
        source={require("@/assets/black screen lol.mp4")}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (status.isPlaying) {
              video.current.pauseAsync();
            } else if (status.didJustFinish) {
              video.current.replayAsync();
            } else {
              video.current.playAsync();
            }
          }}
        />
      </View>
      <Text style={{ color: "white" }}> Heelo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    // flex: 1,
    height: "100%",
    // justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
