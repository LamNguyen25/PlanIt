import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { theme } from '../core/theme'

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  TaskDetails
} from "../screens";

// const screens = {
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: {
//       title: 'home',
//       headerStyle: { backgroundColor: '#348183' },
//       headerLeft : () => {},
//     },
//     headerMode: "none"
//   },
//   LoginScreen: {
//     screen: LoginScreen,
//     navigationOptions: {
//       title: 'Login',
//       headerStyle: { backgroundColor: '#348183' }
//     }
//   },
//   RegisterScreen: {
//     screen: RegisterScreen,
//     navigationOptions: {
//       title: 'Register',
//       headerStyle: { backgroundColor: '#348183' }
//     }
//   },
//   ForgotPasswordScreen: {
//     screen: ForgotPasswordScreen,
//     navigationOptions: {
//       title: 'Reset Password',
//       headerStyle: { backgroundColor: '#348183' }
//     }
//   },
//   Dashboard: {
//     screen: Dashboard,
//     navigationOptions: {
//       title: 'PlanIt',
//       headerStyle: { backgroundColor: '#348183' },
//       headerLeft : () => {},
//     }
//   },
//   TaskDetails: {
//     screen: TaskDetails,
//     navigationOptions: {
//       title: 'Task Details',
//       headerStyle: { backgroundColor: '#348183' }
//     }
//   },
//   AuthLoadingScreen
// }
// const HomeStack = createStackNavigator(
  
//   screens,
//   {
//     initialRouteName: "AuthLoadingScreen",
//     //headerMode: "none"
//   },
//   {
//     defaultNavigationOptions: {
//     headerStyle: { backgroundColor: '#348183', height: 60 }
//   }
//   }
// );
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:theme.colors.bgTitle}}} initialRouteName="AuthLoadingScreen">
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: 'Home',
          headerLeft: () => {}
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

      <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'PlanIt',
            headerLeft: () => {}
          }}
      />
      <Stack.Screen
          name="TaskDetails"
          component={TaskDetails}
          options={{
            title: 'Task Details'
          }}
      />

      <Stack.Screen
        name="AuthLoadingScreen"
        component={AuthLoadingScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;