import { bool } from 'prop-types';
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuitButton = ({ onQuit, setModal, onRestart, children }) => {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionPress = (option) => {
    setSelectedOption(option); // Set the selected option
    setShowConfirmation(true); // Show confirmation dialog
  };

  const handleConfirmationResponse = (confirm) => {
    if (confirm) {
      if (selectedOption === 'Quit') {
        onQuit(); // Call onQuit if Quit was selected
      } else if (selectedOption === 'Restart') {
        onRestart(); // Call onRestart if Restart was selected
      }
      setShowOptionsModal(false); // Close the modal
      setShowConfirmation(false); // Reset confirmation state
    } else {
      setShowConfirmation(false); // Hide confirmation and go back to options
      // Note: No need to setShowOptionsModal(true) here because the modal is already open
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.optioSettings}
        onPress={() => setShowOptionsModal(true)}
      >
        <Text style={styles.textStyle}>{children}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showOptionsModal}
        onRequestClose={() => {
          setShowOptionsModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setShowOptionsModal(false);
                setShowConfirmation(false); // Also reset the confirmation state
              }}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            {!showConfirmation ? (
              <>
                <Text style={styles.modalText}>Options</Text>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleOptionPress('Quit')}
                >
                  <Text style={styles.textStyle}>Quit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleOptionPress('Restart')}
                >
                  <Text style={styles.textStyle}>Restart</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.modalText}>Are you sure?</Text>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleConfirmationResponse(true)}
                >
                  <Text style={styles.textStyle}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleConfirmationResponse(false)}
                >
                  <Text style={styles.textStyle}>No</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Your container style
  },
  button: {
    // Your button style
  },
  buttonText: {
    // Your buttonText style
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionButton: {
    backgroundColor: '#FF3131', // Bootstrap primary blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Rounded corners for a modern look
    elevation: 3, // Add shadow for a 3D effect
    marginVertical: 10,
  },
  optioSettings: {
    backgroundColor: '#FF3131', // Bootstrap primary blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Rounded corners for a modern look
    elevation: 3, // Add shadow for a 3D effect
    marginVertical: 20,
    left: 90,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  modalText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default QuitButton;
