import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from '../core/theme';

export default function UserProfile () {
    return (
        <View style={styles.container}>
           <Text>User Info</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: theme.colors.bgMain,
    },
})