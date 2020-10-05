import React from 'react';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { theme } from '../core/theme';
import { logoutUser } from '../api/auth-api';
import profilePic from '../assets/profile.png';

export default function UserProfile () {
    const onPressLogout = () =>{
        logoutUser();
    }
    return (
        
        <View style={styles.container}>
            <ImageBackground
                style={styles.topContainer}
                blurRadius={10}
                source={require("../assets/bg-2.jpg")}
            >
            <View style={styles.headerColumn}>
                <Image
                style={styles.userImage}
                source={require("../assets/user.jpg")}
                />
                <Text style={styles.userNameText}>Liam Ng</Text>
                <View style={styles.userAddressRow}>
                    <View>
                        <Icon
                            name="place"
                            underlayColor="transparent"
                            iconStyle={{color: 'gray', fontSize: 26,}}
                            // onPress={this.onPressPlace}
                        />
                    </View>
                    <View style={styles.userCityRow}>
                        <Text style={styles.userCityText}>
                            Torrance, USA
                        </Text>
                    </View>
                </View>
            </View>
            </ImageBackground>

           <View style={styles.bottomContainer}>
                <View style={styles.email}>
                    <Icon
                          name="email"
                          underlayColor="transparent"
                          iconStyle={{color: 'gray', fontSize: 30,}}
                      />
                      <Text style={{fontSize: 16, marginLeft: 5, marginRight: 20}}>user@gmail.com</Text>
                      <TouchableOpacity
                          style={styles.button}
                          // onPress={_onSignUpPressed}
                      >
                          <Text style={{color:'#ffffff', fontWeight: 'bold' }}> Change Email</Text>
                      </TouchableOpacity>
                    
                </View>
                <View style={{flex: 3}}></View>
                <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity
                        style={styles.button}
                        onPress={onPressLogout}
                >
                    <Text style={{color:'#ffffff', fontWeight: 'bold' }}> LogOut</Text>
                </TouchableOpacity>
                </View>
                
           </View>
        </View>

    )
};

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
        width: '100%',
        alignContent: 'space-around',
        justifyContent: 'center',
      },
      headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
          ios: {
            alignItems: 'center',
            elevation: 1,
            marginTop: -1,
          },
          android: {
            alignItems: 'center',
          },
        }),
      },
      userImage: {
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 100,
        marginBottom: 15,
        width: 100,
      },
      userNameText: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
      },
      userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
      },
      userCityRow: {
        backgroundColor: 'transparent',
      },
      userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
      },
      bottomContainer: {
        flex: 7,
        width: '100%',
        paddingHorizontal: 20
      },
      email: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10
      },
      button: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        backgroundColor: 'gray',
        paddingHorizontal: 10,
        borderRadius: 3,
    
    },
      
})