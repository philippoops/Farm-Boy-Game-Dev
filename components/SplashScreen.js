import React, { useEffect, useRef } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Images from '../Images';
import Constants from '../Constants';

const SplashScreen = ({ onHide }) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: true,
      }).start(() => {
        onHide && onHide(); // Callback to notify that the splash screen has been hidden
      });

      Animated.timing(position, {
        toValue: -500,
        duration: 8000,
        useNativeDriver: true,
      }).start();
    }, 8000); // Splash screen disappears after 2000 milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={Images.splashScreen}
      style={styles.splashScreenContainer}
      resizeMode="cover"
    ></ImageBackground>
    // <Animated.View style={{ opacity, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Animated.View style={[styles.textContainer, { transform: [{ translateY: position }] }]}>
    //     <Text style={styles.text}>My App</Text>
    //   </Animated.View>
    // </Animated.View>
  );
};

const styles = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
    zIndex: 0,
  },
});

export default SplashScreen;
