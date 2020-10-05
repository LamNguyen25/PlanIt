import React from 'react';
// import { StyleSheet, Text, View, ScrollView, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { colors } from '../core/theme'

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from "../screens";


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    // <KeyboardAvoidingView style={{flex: 1}} >
    //    <ScrollView horizontal={true} contentContainerStyle={{minHeight: "100%"}}>
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor: colors.bgTitle}}} initialRouteName="HomeScreen">
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: 'Home',
          headerLeft: null
        }}
        
      />
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Login'}}
      />

      <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{title: 'Register'}}
      />

      <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{title: 'Reset Password'}}
      />
     
    </Stack.Navigator>
    // </ScrollView>
    // </KeyboardAvoidingView>
  );
};

export default AuthStack;