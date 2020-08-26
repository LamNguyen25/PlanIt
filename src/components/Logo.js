import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
      position: 'relative',
      width: 128,
      height: 128,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  });

const Logo = () => (
    <Image source={require('../assets/taskplan-logo.png')} style={styles.image}/>
);

export default memo(Logo);