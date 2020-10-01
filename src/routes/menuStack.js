import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from "@react-navigation/native";
import MenuIcon from 'react-native-vector-icons/MaterialIcons';
 import Icon from 'react-native-vector-icons/FontAwesome';
import LIcon from 'react-native-vector-icons/SimpleLineIcons';
import UserIcon from 'react-native-vector-icons/EvilIcons';
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
        <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#348183'}, headerLeft: null}}>
            <Stack.Screen
                name="Home"
                component={DashBoardMenu}
                options={({ navigation }) => ({
                    title: 'PlanIt',
                    headerLeft: () => (
                        <MenuIcon 
                            name='menu'
                            size={30} 
                            style={{ marginLeft: 15, color: 'white' }}
                            onPress={
                                () => navigation.dispatch(DrawerActions.toggleDrawer()) //toggles the menu
                            }
                         />
                    ),
                })}
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

            {/* <Stack.Screen name="Menu" component={Menu} options={{
                title: 'Menu'
            }}
            /> */}
        
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();
const DashBoardMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={DashBoard} 
        options={{
            title: () => (
                <View style={styles.menu}>
                    <Icon name='home' color={'white'} size={20} />
                    <Text style={styles.menuText}>Home</Text>
                </View>
                
              ),
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={UserProfile} 
        options={{
            title: () => (
                <View style={styles.menu}>
                    <Icon name='user-o' color={'white'} size={20} />
                    <Text style={styles.menuText}>Profile</Text>
                </View>
                
              ),
        }}
        />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    menuText: {
        marginLeft: 15,
        fontSize: 16,
        color: 'black'
    },
});

export default MenuStack;