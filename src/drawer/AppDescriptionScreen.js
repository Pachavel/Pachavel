import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View,Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'
import {IMAGE} from '../constants/Image'
export class AppDescriptionScreen extends Component {
  render(){
    return (
      <View style={{flex:1, backgroundColor:'#303C4A' }}>
      <CustomHeader title="Profile" navigation={this.props.navigation}/>
      <View style={{ flex: 1, margin:5, padding:10}}>
      <StatusBar hidden/>
        <Image
          source={IMAGE.ICON_SKILL_SCOPE}
          resizeMode="center"
          style={styles.image} />
        <Text style={styles.title} >SKILL SCOPE</Text>
        <Text style={styles.body}> -  Is an app that was made to help people be organized,
         and encourage them to build their skillsets by giving them exp points, $copens (App's custom currency),
         and achievements to unlock. This motivates the user by rewarding them with titles, levels,
         and in-app items that make their progress feel more satisfying.
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title:{
      color:'tomato',
      textAlign:'center',
      fontSize: 35,
      margin:20,
      textDecorationLine:'underline',
      fontWeight:'bold',
      letterSpacing:10,
      fontStyle:'italic',
      fontWeight:'bold',
    },
    body:{
      color:'#BDDCE8',
      textAlign:'justify',
      margin:5,
      fontSize: 25
    },
    image: {
        width: 300,
        height: 200,
        marginTop:10,
        borderRadius:100,
        alignSelf:'center'
    },
  });
