import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../core/theme";

const TaskItem = props => {
    return (
        // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)} >
        //     <View style={styles.listItem} >
        //         <Text>{props.title}</Text>
        //     </View>
        // </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} onPress={props.onClick} >
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
    )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: theme.colors.bdWhite,
        borderColor: theme.colors.txtBlack,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        //borderStyle: "dotted"
    }
})

export default TaskItem;