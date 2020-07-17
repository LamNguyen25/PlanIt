import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import Menu from './Menu';
import {theme} from '../core/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Screen = Dimensions.get('window')
const center = Screen.width/2 ;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.sideMenu}>
        <Menu />
      </TouchableOpacity>
    );
  };

  _onPressTask = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          drawerContent={this.drawerContent()}
          drawerPercentage={80}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
        <View style={styles.mainScreen}>
          <View style={ styles.navBar }>
            <TouchableOpacity onPress={this.toggleOpen} style={styles.button}>
              <Icon name='menu' size={30} style={{ color: theme.colors.txtWhite }} />
            </TouchableOpacity>
          </View>
          
          <Text style={ styles.headerHolder }>Welcome to TaskList</Text>
          
          <TouchableOpacity  style={ styles.buttonContainer } onPress={this._onPressTask} >
            <Icon style={ styles.addBtn } name='add-circle' size={24} />
            <Text style={styles.btnHeaderTitleStyle}>Add New Task</Text>
          </TouchableOpacity>
          
        </View>
        
        </MenuDrawer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: theme.colors.bgMain,
  },
  navBar: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 16,
  },
  headerHolder: {
    padding: 25,
    flex: 1,
    marginTop: 10,
    marginLeft: center - 100
  },
  siteName: {
    marginTop: 70
  },
  sideMenu: {
    flex: 1,
    backgroundColor: theme.colors.bdNightBlue,
    padding: 10,
    
  },
  mainScreen: {
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: { height: -5, width:-5},
    shadowRadius: 10,
    //backgroundColor: theme.colors.bgMain,
  },
  siteName: {
    marginTop: 30,
    width: 250,
    color: theme.colors.h1White
  },
  buttonContainer: {
    top: 150
  },
  addBtn: {
    position: 'absolute',
    top: 30,
    marginLeft: center - 12
  },
  btnHeaderTitleStyle: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: center - (center/3)
   
  }
})

export default Dashboard;