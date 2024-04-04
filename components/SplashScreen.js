import React, { useRef } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Images from "../Images";
import Constants from "../Constants";

const SplashScreen = ({ onStartGame }) => {
  const startGame = () => {
    onStartGame && onStartGame();
  };

  return (
    <ImageBackground
      source={Images.splashScreen}
      style={styles.splashScreenContainer}
      resizeMode="cover"
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={startGame} style={styles.startButton}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
  },
  startButton: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default SplashScreen;
