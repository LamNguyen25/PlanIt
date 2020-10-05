import React from 'react';
import { StyleSheet, View, Text, Dimensions} from 'react-native';
import { colors } from '../core/theme';
import BackButton  from '../components/BackButton';


export default function TaskDetails ({ route, navigation }) {
    const { title }  = route.params;
    const { time } = route.params;
    return (
      <View style={styles.container}>

        <View style={styles.topContainer}>
           <BackButton goBack={() => navigation.navigate("Home")} />
        </View>

        <View style={styles.centerContainer}>
          <View style={styles.cardViewStyle}>
            {/* <View style> */}
              <Text>Title: {title}</Text>
              <Text style={{marginTop: 10}}>Time {JSON.stringify(time)}</Text>
            {/* </View> */}
          </View>
        </View>

        <View style={styles.bottomContainer}/>
      </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1
  },
  topContainer: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
  },
  centerContainer: {
    flex: 12,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },  
  cardViewStyle:{
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: '#F9E79F',
    borderColor: 'gray'
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
  },
})