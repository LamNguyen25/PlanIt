import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { theme } from '../core/theme'

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from "../screens";


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:theme.colors.bgTitle}}} initialRouteName="HomeScreen">
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
      {/* <Stack.Screen
        name="AuthLoadingScreen"
        component={AuthLoadingScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;