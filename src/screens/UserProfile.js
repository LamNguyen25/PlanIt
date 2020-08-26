import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';

export default function TaskDetails ({ navigation }) {
    
    return (
        <View style={styles.container}>
           <h1>User Profile</h1>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: theme.colors.bgMain,
    },
})