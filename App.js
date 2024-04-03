import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import Physics from "./Physics";
import React, { useEffect, useState } from "react";
import Constants from "./Constants";
import SplashScreen from "./components/SplashScreen";
import Images from "./Images";
import QuitButton from "./components/QuitButton";
import RestartButton from "./components/RestartButton";

export default function App() {
  const [gameEngine, setGameEngine] = useState(null);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  // Define the onStartGame function to start the game
  const onStartGame = () => {
    setSplashScreenVisible(false); // Hide the splash screen
    setRunning(true); // Start the game
  };

  const handleQuit = () => {
    setScore(0);
    setSplashScreenVisible(true); // Go back to SplashScreen
  };

  const handleRestart = () => {
    setScore(0);
    setRunning(true);
    gameEngine.swap(entities());
  };

  return (
    <>
      {splashScreenVisible ? (
        <SplashScreen onStartGame={onStartGame} /> // Pass onStartGame callback
      ) : (
        <ImageBackground source={Images.Bg} style={styles.container}>
          <GameEngine
            ref={(ref) => {
              setGameEngine(ref);
            }}
            entities={entities()}
            systems={[Physics]}
            running={running}
            onEvent={(e) => {
              if (e.type === "gameOver") {
                setRunning(false);
              }
              if (e.type === "updateScore") {
                setScore(score + 1);
              }
            }}
            style={styles.gameContainer}
          >
            <StatusBar style="auto" hidden={true} />
          </GameEngine>

          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              position: "absolute",
              left: 20,
              top: 20,
              backgroundColor: "orange",
              padding: 10,
            }}
          >
            {score}
          </Text>

          <View style={styles.controlRow}>
            <TouchableOpacity
              onPress={() => {
                gameEngine.dispatch({ type: "move-left" });
              }}
            >
              <View style={styles.control}>
                <Text style={styles.centerText}>←</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                gameEngine.dispatch({ type: "move-right" });
              }}
            >
              <View style={styles.control}>
                <Text style={styles.centerText}>→</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* QuitButton and RestartButton components */}
          <View style={styles.buttonsContainer}>
            <QuitButton onQuit={handleQuit} />
            <RestartButton onRestart={handleRestart} />
          </View>

          {!running ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={Images.gameOverBG}
                resizeMode="cover"
                style={styles.playAgainContainer}
              >
                <Text style={styles.playAgainText}>PLAY AGAIN?</Text>
                <View style={styles.optionsContainer}>
                  <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => {
                      setScore(0);
                      setRunning(true);
                      gameEngine.swap(entities());
                    }}
                  >
                    <Text style={styles.optionText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionButton}
                    onPress={handleQuit} // Use handleQuit function directly
                  >
                    <Text style={styles.optionText}>No</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          ) : null}
        </ImageBackground>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  control: {
    elevation: 3,
    paddingVertical: 14,
    paddingHorizontal: 75,
  },
  controlRow: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  centerText: {
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 29,
  },
  playAgainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Light grey background for better visibility
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
  playAgainText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Dark text for better readability
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%", // Container width to keep buttons apart
  },
  optionButton: {
    backgroundColor: "#FF3131", // Bootstrap primary blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Rounded corners for a modern look
    elevation: 3, // Add shadow for a 3D effect
  },
  optionText: {
    color: "#000", // White text color for contrast
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    right: 20,
    width: 200, // Adjust the width as needed
  },
});
