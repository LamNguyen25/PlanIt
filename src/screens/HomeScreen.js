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
  <Background style={styles.container}>       
   <View style={styles.topContainer}/>
    <View style={styles.centerContainer}> 
      <CardView
        cardElevation={4}
        maxCardElevation={4}
        cornerRadius={10}
        style={styles.cardViewStyle}
      >
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
        
      </CardView>
      </View>
      <View style={styles.bottomContainer}/>
  </Background>
);

export default memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1
  },
  topContainer: {
    flex: 3,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 13,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  cardViewStyle:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.bgTitle,
    opacity: .8
  },
  bottomContainer: {
    flex: 3,
    width: '100%'
  },
  pText:{
    color: theme.colors.txtBlack
  }
});