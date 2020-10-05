import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../core/theme";

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      lineHeight: 26,
      color: colors.secondary,
      textAlign: "center",
      marginBottom: 14
    }
  });
  
const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;

export default memo(Paragraph);
