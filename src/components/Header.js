import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../core/theme";

const styles = StyleSheet.create({
    header: {
      fontSize: 26,
      color: colors.primary,
      fontWeight: "bold",
      paddingVertical: 14
    }
  });
  
const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

export default memo(Header);