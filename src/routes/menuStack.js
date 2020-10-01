import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    LoginScreen,
    TaskDetails,
    Menu
} from '../screens';
import DashBoard from '../screens/Dashboard';
import UserProfile from '../screens/UserProfile';
const Stack = createStackNavigator();
const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#348183'}} } initialRouteName="DashBoard">
            <Stack.Screen
                name="DashBoard"
                component={DashBoardMenu}
                options={{
                    title: 'PlanIt',
                    headerLeft: () => {}
                }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{title: 'Login'}}
            />
            <Stack.Screen
                name="TaskDetails"
                component={TaskDetails}
                options={{
                    title: 'Task Details'
                }}
            />

            <Stack.Screen name="Menu" component={Menu} options={{
                title: 'Menu'
            }}
            />
            {/* <Stack.Screen 
                name="Profile" 
                component={UserProfile} 
                options={{
                    title: 'Profile'
                }} 
            />
             */}
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();
const DashBoardMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="DashBoard" 
        component={DashBoard} 
        options={{
            title: 'PlanIt',
            headerLeft: () => {}
        }}/>
      <Drawer.Screen 
        name="Profile" 
        component={UserProfile} 
        options={{
            title: 'Profile',
        }}/>
    </Drawer.Navigator>
  );
};


export default MenuStack;