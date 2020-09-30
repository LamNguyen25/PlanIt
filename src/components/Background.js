import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Dimensions
} from "react-native";

// const screen = Dimensions.get('window');
// const mobileWidth = screen.width;
// const mobileHeight = screen.height;

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: "100%",
      //width: mobileWidth,
      //height: mobileHeight,
    },
    container: {
      flex: 2,
      padding: 20,
      width: "100%",
      maxWidth: 340,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center"
    },
  });

const Background = ({ children }) => (
  <ImageBackground
    source={require("../assets/bg-1.jpg")}
    resizeMode="stretch"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>

  
  
);

export default memo(Background);
