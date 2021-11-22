import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import Inputs from './components/Inputs';
import Account from './components/Account';
import {IMAGE} from '../constants/Image'
export class LoginScreen extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
      <StatusBar hidden/>
      <ScrollView style={{backgroundColor:'#303C4A'}}>
          <View style={styles.container}>
          <StatusBar hidden />
              <Image
                  source={IMAGE.ICON_SKILL_SCOPE}
                  resizeMode="center"
                  style={styles.image} />
              <Text style={[styles.textTitle,{}]}>Skill Scope</Text>
              <Text style={{color:'#828ac2',fontSize:20}}>Level up, one skill at a time</Text>
              <View style={{marginTop: 20}} />
              <Inputs name="Email" icon="user" />
              <Inputs name="Password" icon="lock" pass={true} />
              <View style={{width: '90%'}}>
                  <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Password?</Text>
              </View>
              <TouchableOpacity style={styles.btn}
                onPress={() => this.props.navigation.navigate("HomeApp")}>
              <Text style={styles.btntext}>LOGIN</Text>
              </TouchableOpacity>

              <Text style={styles.textBody}>Or connect using</Text>
              <View style={{flexDirection: 'row'}}>
                  <Account color="#3b5c8f" icon="facebook" title="Facebook" />
                  <Account color="#ec482f" icon="google" title="Google" />
              </View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                  <Text style={styles.textBody}>Don't Have an account</Text>
                  <Text style={[styles.textBody, {color: '#828BC3'}]}
                    onPress={() => this.props.navigation.navigate('SignUp')}> Sign Up
                  </Text>
              </View>
          </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 200,
        marginTop:10,
        borderRadius:100
    },
    textTitle: {
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontSize: 16
    },
    btn: {
        width: '90%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 0,
        backgroundColor:'#828BC3'
    },
    btntext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10
    }
});
