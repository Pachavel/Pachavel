import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Text, ScrollView, Image,TouchableOpacity} from 'react-native';
import Input from './components/Inputs';
import {IMAGE} from '../constants/Image'
export class SignUpScreen extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
      <StatusBar hidden/>
      <ScrollView style={{backgroundColor:'#303C4A'}}>
          <View style={styles.container}>
          <Image source={IMAGE.ICON_SIGN_UP} resizeMode="center" style={styles.image} />
              <Text style={styles.textTitle}>Start your Skill Scope journey now!</Text>
              <Input name="Full Name" icon="user" />
              <Input name="Email" icon="envelope" />
              <Input name="Phone" icon="phone" />
              <Input name="Password" icon="lock" pass={true} />
              <Input name="Confirm Password" icon="lock" pass={true} />
              <TouchableOpacity style={styles.btn}
                onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={styles.btntext}>REGISTER</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textBody}>Aiready have an account</Text>
                  <Text style={[styles.textBody, {color: '#828BC3'}]}
                    onPress={() => this.props.navigation.navigate('Login')}> Login here</Text>

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
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 25,
        marginVertical: 5
    },
    textBody: {
        fontSize: 17,
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
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
