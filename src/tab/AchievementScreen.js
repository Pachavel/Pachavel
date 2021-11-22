import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TouchableHighlight, Image, Alert} from 'react-native';
import {CustomHeader} from '../index'
import {RVText} from '../core'

export class AchievementScreen extends Component {
  render(){
    return (
      <View style={{flex:1, backgroundColor:'#303C4A'}}>
      <ScrollView>
      <CustomHeader title="Achievement" isHome={true} navigation={this.props.navigation}/>
      <StatusBar hidden/>
      <Text style={styles.txt}> Click to View Achievements{"\n"}</Text>
      <View style={{alignItems:'center'}}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#ecf0f1"
        onPress={() => this.props.navigation.navigate('AchievementDetail')}
      >
        <View>
          <Image style={styles.img} source={require('../image/trophy.png')} />
        </View>
      </TouchableHighlight>
        {Menus.map((menu, key) => (
          <View key={key} style={{ flexDirection: "row", marginTop:16 }}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#ecf0f1"
              onPress={() => Alert.alert('Do more tasks to unlock!')}
            >
              <View>
                <Image style={styles.img} source={menu.img_link} />
              </View>
            </TouchableHighlight>
          </View>
        ))}
        </View>
      </ScrollView>
      </View>
    );
  }
}

const Menus = [
  {
    img_link:require('../image/trophy-black.jpg'),
  },
  {
    img_link:require('../image/trophy-black.jpg'),
  },
  {
    img_link:require('../image/trophy-black.jpg'),
  },
  {
    img_link:require('../image/trophy-black.jpg'),
  },
  {
    img_link:require('../image/trophy-black.jpg'),
  },
  {
    img_link:require('../image/trophy-black.jpg'),
  }
];

const styles = StyleSheet.create({
  txt:{
    textAlign:'center',
    fontSize:30,
    color:'tomato',
    marginTop:10,
    fontWeight:'bold',
  },
  img: {
    width: 350,
    height: 350,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    margin:10
  },
});
