import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import {CustomHeader} from '../index'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {IMAGE} from '../constants/Image'
export class ProfileScreen extends Component {

  render(){
    return (
      <View style={{flex:1, backgroundColor:'#303C4A'}}>
      <CustomHeader title="Profile" navigation={this.props.navigation}/>
      <SafeAreaView style={styles.container}>
                 <ScrollView showsVerticalScrollIndicator={false}>
                     <View style={{ alignSelf: "center" }}>
                         <View style={styles.profileImage}>
                             <Image source={IMAGE.ICON_PROFILE} style={styles.image}/>
                         </View>
                     </View>

                     <View style={styles.infoContainer}>
                         <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>johndoe@gmail.com</Text>
                         <Text style={[styles.subtext, { color: "tomato", fontSize: 14 }]}>email</Text>
                     </View>

                     <View style={styles.statsContainer}>
                         <View style={styles.statsBox}>
                             <Text style={[styles.text, { fontSize: 24 }]}>1</Text>
                             <Text style={[styles.text, styles.subText]}>Level</Text>
                         </View>
                         <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                             <Text style={[styles.text, { fontSize: 24 }]}>Novice</Text>
                             <Text style={[styles.text, styles.subText]}>TITLE</Text>
                         </View>
                         <View style={styles.statsBox}>
                             <Text style={[styles.text, { fontSize: 24 }]}>23</Text>
                             <Text style={[styles.text, styles.subText]}>$copens</Text>
                         </View>
                     </View>
                      <View>
                      <Text style={[styles.Skills, { fontSize: 30 }]}>SKILLS:</Text>
                      </View>
                      <View>
                      <Text style={[styles.description, { fontSize: 20 }]}>- Art (Beginner)</Text>
                      <Text style={[styles.description, { fontSize: 20 }]}>- Calisthenics (Beginner)</Text>
                      <Text style={[styles.description, { fontSize: 20 }]}>- Gaming (Beginner)</Text>
                      <Text style={[styles.description, { fontSize: 20 }]}>- Diligence (Intermediate)</Text>
                      </View>
             </ScrollView>
            </SafeAreaView>
          </View>
    );

  }
}

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: "#303C4A"
      },
      text: {
          color: "#FFF"
      },
      Skills: {
          color: "tomato",
          marginLeft:26,
          marginTop:40,
          marginBottom:5
      },
      description: {
          color: "#BDDCE8",
          marginLeft:26,
          margin:5
      },
      image: {
          flex: 1,
          height: undefined,
          width: undefined,
      },
      titleBar: {
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 24,
          marginHorizontal: 16
      },
      subText: {
          fontSize: 12,
          color: "tomato",
          textTransform: "uppercase",
          fontWeight: "bold"

      },
      profileImage: {
          width: 180,
          height: 180,
          borderRadius: 200,
          overflow: "hidden",
          marginTop:20
      },
      infoContainer: {
          alignSelf: "center",
          alignItems: "center",
          marginTop: 16
      },
      statsContainer: {
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 32
      },
      statsBox: {
          alignItems: "center",
          flex: 1
      },
      mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    }
  });
