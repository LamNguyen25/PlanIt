import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserProfile from "../screens/UserProfile";
import Menu from '../screens/Menu';

const Stack = createStackNavigator();
const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#348183'}}}>
            <Stack.Screen name="Menu" component={Menu} options={{
                title: 'Menu'
            }}
            />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{
                title: 'Profile'
            }}
            />
            
        </Stack.Navigator>
    )
}

export default MenuStack;