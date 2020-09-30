import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from '../routes/homeStack';
import MenuStack from './menuStack';
import UserProfile from '../screens/UserProfile';

// Contains two stack
const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeStack">
          <Drawer.Screen name="HomeStack" component={HomeStack} />
          <Drawer.Screen name="MenuStack" component={MenuStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }