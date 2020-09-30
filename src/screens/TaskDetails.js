import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import CardView from 'react-native-cardview'
import { theme } from '../core/theme';

const screen = Dimensions.get('window');
const mobileWidth = screen.width;
const mobileHeight = screen.height;

export default function TaskDetails ({ route, navigation }) {
    const { title }  = route.params;
    const { time } = route.params;
    return (
        <CardView
        cardElevation={4}
        maxCardElevation={4}
        cornerRadius={10}
        style={styles.cardViewStyle}
      >
          <View style={styles.cardElement}>
            <Text>Title: {title}</Text>
            <Text>Time {JSON.stringify(time)}</Text>

          </View>
      </CardView>
    )
}

const styles = StyleSheet.create({
    cardViewStyle:{
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        width: mobileWidth - (mobileWidth/4), 
        height: mobileHeight - (mobileHeight/4),
        backgroundColor: '#F1FAEE',
        //opacity: 1
    },
      cardElement: {
        padding:10, 
        //opacity:1, 
        justifyContent: 'center'
    },
})