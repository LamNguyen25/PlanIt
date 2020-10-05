import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import {colors} from '../core/theme';

const screen = Dimensions.get('window');
const mobileWidth = screen.width;
const mobileHeight = screen.height;

const HomeScreen = ({ navigation }) => (
  <Background style={styles.container}>       
   <View style={styles.topContainer}/>
    <View style={styles.centerContainer}> 
        <View style={styles.cardViewStyle}>
          <Logo/>
          <Paragraph style={styles.pText}>
            Task management app
          </Paragraph>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={{color:'#ffffff', fontWeight: 'bold' }}> Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignUp}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={{color:colors.primary, fontWeight: 'bold' }}> Sign Up</Text>
          </TouchableOpacity>
        
        </View>
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
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.bgTitle,
    borderRadius: 5,
    opacity: .8
  },
  bottomContainer: {
    flex: 3,
    width: '100%'
  },
  pText:{
    color: colors.txtBlack
  },
  buttonLogin: {
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 5,
},
buttonSignUp: {
  width: "100%",
  marginVertical: 10,
  justifyContent: "center",
  alignItems: "center",
  height: 50,
  backgroundColor: colors.bdWhite,
  borderRadius: 5
},
});