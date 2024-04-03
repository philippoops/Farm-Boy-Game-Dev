import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const QuitButton = ({ onQuit }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleQuit = () => {
    if (!showConfirmation) {
      setShowConfirmation(true);
    } else {
      onQuit();
      setShowConfirmation(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleQuit}>
        <Text style={styles.buttonText}>
          {!showConfirmation ? "Quit" : "Are you sure?"}
        </Text>
      </TouchableOpacity>
      {showConfirmation && (
        <View style={styles.confirmationContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={onQuit}>
            <Text style={styles.confirmButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => setShowConfirmation(false)}
          >
            <Text style={styles.confirmButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically
    marginRight: 10, // Add margin to create space between buttons
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 15, // Adjust padding to make both buttons consistent
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  confirmationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default QuitButton;
