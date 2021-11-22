import React, {Component} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {IMAGE} from './constants/Image'

export class CustomDrawerContent extends Component {
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#303C4A'}}>
        <View style={{height:150, alignItems:'center',justifyContent:'center'}}>
          <Image source={IMAGE.ICON_SKILL_SCOPE}
            style={{height:120, width:120, borderRadius:60}}
          />
        </View>
        <ScrollView style={{marginLeft:5}}>
          <TouchableOpacity
            style={{marginTop:20}}
            onPress={() => this.props.navigation.navigate("MenuTab")}>
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop:20}}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text style={styles.txt}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop:20}}
            onPress={() => this.props.navigation.navigate("AppDescription")}>
            <Text style={styles.txt}>App Description</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("Login")}>
          <Text style={styles.btntext}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt:{
    margin:10,
    fontSize:20,
    color:'#D0C7C5',
  },
  btn: {
      width: '50%',
      height: 50,
      borderRadius: 10,
      marginVertical: 10,
      borderWidth: 0,
      backgroundColor:'#828BC3',
      alignSelf:'center'
  },
  btntext: {
      fontSize: 22,
      color: 'black',
      alignSelf: 'center',
      marginVertical: 10
  }
});
