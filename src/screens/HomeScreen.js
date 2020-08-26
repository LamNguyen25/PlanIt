import React, { memo } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import CardView from 'react-native-cardview'
import {theme} from '../core/theme';

const screen = Dimensions.get('window');
const mobileWidth = screen.width;
const mobileHeight = screen.height;

const HomeScreen = ({ navigation }) => (
  <Background>       
      <CardView
        cardElevation={4}
        maxCardElevation={4}
        cornerRadius={10}
        style={styles.cardViewStyle}
      >
        <View style={styles.cardElement}>
          <Logo/>
          <Paragraph style={styles.pText}>
            Task management app
          </Paragraph>
          <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
            Login
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Sign Up
          </Button>
        </View>
        
      </CardView>
  </Background>
);

export default memo(HomeScreen);

const styles = StyleSheet.create({
  cardViewStyle:{
    // width: 250, 
    // height: 400,
    width: mobileWidth - (mobileWidth/3), 
    height: mobileHeight - (mobileHeight/2),
    backgroundColor: theme.colors.bgTitle,
    opacity: .8
  },
  cardElement: {
    padding:10, 
    opacity:1, 
    justifyContent: 'center'
  },
  pText:{
    color: theme.colors.txtBlack
  }
});