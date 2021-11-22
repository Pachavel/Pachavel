import React, {Component, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    Keyboard
} from 'react-native';
import {CustomHeader} from '../index'
import {RVText} from '../core'
import Task from './TaskDetail';

function TaskScreen({navigation}){
  const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
      <View style={{flex: 1, backgroundColor:'#303C4A'}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps='handled'>
          <CustomHeader title="Tasks" isHome={true} navigation={navigation}/>
          <StatusBar hidden/>
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />
                    </TouchableOpacity>
                  )
                })
              }
              </View>
            </View>
         </ScrollView>
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}>
          <TextInput style={styles.input}
                     placeholder={'Write a task'}
                     placeholderTextColor = "#8C1818"
                     value={task}
                     onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Image
                style={styles.plusSign}
                source={require('../image/plus-sign.png')}/>
            </View>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
    );
}
export default TaskScreen

const styles = StyleSheet.create({
    tasksWrapper: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    items: {
        marginTop: 10,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingBottom: 20,
        paddingTop: 20,
        borderTopColor: '#281E5D',
        borderWidth: 3
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#281E5D',
        borderWidth: 3,
        width: 250,
        color:'black'
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#281E5D',
        borderWidth: 3,
    },
    plusSign: {
        width: 25,
        height: 25,
    }
});
