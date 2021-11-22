import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {CustomHeader} from '../index'
export class AchievementScreenDetail extends Component {
  render(){
    return (
      <View style={{flex:1, backgroundColor:'#303C4A'}}>
        <CustomHeader title="Achievement" navigation={this.props.navigation}/>
        <StatusBar hidden/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.img} source={require('../image/trophy.png')} />
        <Text style={styles.txt}>Road to Change!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt:{
    textAlign:'center',
    fontSize:30,
    color:'#BDDCE8',
    marginTop:10,
    textDecorationLine:'underline',
    fontStyle:'italic',
  },
  img: {
    width: 350,
    height: 350,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  }
});
