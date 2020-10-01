import React, { memo, Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LIcon from 'react-native-vector-icons/SimpleLineIcons';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import { theme } from "../core/theme";
import { logoutUser } from '../api/auth-api';

let SideMenuWidth = 300;

const Menu = ({ navigation }) => {
        return (
            <View style={styles.sideMenu}>
                <View style={{ paddingHorizontal: 30 }}>
                    <View style={ styles.header }>
                        <View style={ styles.userInfosHolder }>
                            {/* <Image styles={ styles.avatar } source={require('../assets/user1.jpg')} /> */}
                            <UserIcon name='user' color={theme.colors.txtWhite} size={50} />
                            <View style={ styles.userInfos }>
                                <Text style={ styles.userName }> Username</Text>
                                <Text style={ styles.userNameText}>View and edit profile</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={[ styles.menu, {backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 5} ]}
                    >
                        <Icon name='home' color={theme.colors.txtWhite} size={24} />
                        <Text style={styles.menuText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={ styles.menu} 
                        onPress={() => navigation.navigate("Profile")}
                    >
                        <Icon name='user-o' color={theme.colors.txtWhite} size={24} />
                        <Text style={styles.menuText}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.menu }>
                        <Icon name='cog' color={theme.colors.txtWhite} size={24} />
                        <Text style={styles.menuText}>Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.menu }>
                        <Icon name='comment-o' color={theme.colors.txtWhite} size={24} />
                        <Text style={styles.menuText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.menu }>
                        <Icon name='bell-o' color={theme.colors.txtWhite} size={24} />
                        <Text style={styles.menuText}>Notification</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.menu } mode="outlined" onPress={() => logoutUser()}>
                        <LIcon name='logout' color={theme.colors.txtWhite} size={24} />
                        <Text style={styles.menuText}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
  //  }

  
};

const styles = StyleSheet.create({
    sideMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: SideMenuWidth,
        backgroundColor: 'transparent'
    },
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    menuText: {
        marginLeft: 20,
        fontSize: 16,
        color: theme.colors.txtWhite
    },
    header: {
        marginTop: 50,
        marginBottom: 20
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    userInfos: {
        height: 50,
        justifyContent:'center',
    },
    userName: {
        fontWeight: '700'
    },
    userNameText: {
        fontSize: 16,
        color: theme.colors.txtWhite
    }
})

export default memo(Menu);

