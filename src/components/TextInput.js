import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { colors } from "../core/theme";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 12,
    },
    input: {
        backgroundColor: colors.surface
      },
      error: {
        fontSize: 14,
        color: colors.error,
        paddingHorizontal: 4,
        paddingTop: 4
      }
});

const TextInput = ({ errorText, ...props }) => (
    <View style={styles.container}>
        <Input
            style={styles.input}
            selectionColor={colors.primary}
            underlineColor="transparent"
            mode="outlined"
            {...props}
        />
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
);

export default memo(TextInput);