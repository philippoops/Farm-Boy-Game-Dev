import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const RestartButton = ({ onRestart }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10, // Adjust margin as needed to create space between buttons
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RestartButton;
