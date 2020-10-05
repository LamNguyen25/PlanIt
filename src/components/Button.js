import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { colors } from "../core/theme";

const styles = StyleSheet.create({
    button: {
      width: "100%",
      marginVertical: 10
    },
    text: {
      fontWeight: "bold",
      fontSize: 15,
      lineHeight: 26
    }
  });
  
const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === "outlined" && { backgroundColor: colors.surface},
      style
    ]}
    labelStyle={[
      styles.text,
      mode === "contained" && { color: colors.surface}
    ]}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

export default memo(Button);
