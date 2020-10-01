import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';


import AuthStack from './AuthStack';
import MenuStack from './menuStack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
// Contains two stack
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function RootDrawerNavigator() {
    return (
      // <NavigationContainer>
      //   <Drawer.Navigator initialRouteName="AuthStack">
      //     <Drawer.Screen name="AuthLoadingScreen" component={AuthLoadingScreen}/>
      //     <Drawer.Screen name="MenuStack" component={MenuStack} />
      //     <Drawer.Screen name="AuthStack" component={AuthStack} />
          
      //   </Drawer.Navigator>
      // </NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
      >
         <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen}/>
         <Stack.Screen name="MenuStack" component={MenuStack} />
         <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    );
  }