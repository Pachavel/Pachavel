import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'
import {RVText} from '../core'
export class HomeScreen extends Component {
  render(){
    return (
      <View style={{flex: 1, backgroundColor:'#303C4A'}}>
        <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
        <StatusBar hidden/>
        <View style={styles.content}>
            <Text style={styles.author}>Winston Churchill</Text>
            <Text style={styles.quote}>“Success is not final, failure is not fatal: it is the courage to continue that counts.”</Text>
            <Text style={styles.author}>Jim Rohn</Text>
            <Text style={styles.quote}>“Happiness is not by chance, but by choice.” </Text>
            <Text style={styles.author}>Dr. Henry Link</Text>
            <Text style={styles.quote}>“We generate fears while we sit. We overcome them by action.”</Text>
            <Text style={styles.author}>George Bernard Shaw</Text>
            <Text style={styles.quote}>Life isn’t about finding yourself. Life is about creating yourself.”</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  quote:{
    color: '#BDDCE8',
    fontSize: 20,
    margin:10,
    textAlign:'justify',
    fontStyle:'italic',
    letterSpacing:2,
  },
  author:{
    color: 'tomato',
    fontSize: 20,
    textAlign:'justify',
    fontWeight:'bold',
    letterSpacing:3,

  },
  content:{
    flex:1,
    justifyContent:'center',
    padding:30

  }
});
