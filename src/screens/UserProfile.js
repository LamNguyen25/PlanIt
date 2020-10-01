import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
import { logoutUser } from '../api/auth-api';
export default function UserProfile () {
    return (
        <View style={styles.container}>
           <Text>User Info</Text>
           <TouchableOpacity style={ styles.menu } mode="outlined" onPress={() => logoutUser()}>
                <Text style={styles.menuText}>Log Out</Text>
            </TouchableOpacity>
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