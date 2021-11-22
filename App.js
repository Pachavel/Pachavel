import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {CustomHeader, CustomDrawerContent} from './src'
import {HomeScreen, AchievementScreen,
        AchievementScreenDetail, StoreScreen,} from './src/tab'
import TaskScreen from './src/tab/TaskScreen'
import {ProfileScreen, AppDescriptionScreen} from './src/drawer'
import {SignUpScreen, LoginScreen} from './src/auth'
import {IMAGE} from './src/constants/Image'

const Stack = createStackNavigator();
const navOptionHandler = () => ({
  headerShown:false,
})


const StackAchievement = createStackNavigator();
function AchievementStack(){
  return(
    <StackAchievement.Navigator initialRouteName="Achievement">
      <StackAchievement.Screen name="Achievement" component={AchievementScreen} options={navOptionHandler}/>
      <StackAchievement.Screen name="AchievementDetail" component={AchievementScreenDetail} options={navOptionHandler}/>
    </StackAchievement.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size }) => {
         let iconName;

         if (route.name === 'Home') {
           iconName = focused
             ? IMAGE.ICON_HOME_BLACK
             : IMAGE.ICON_HOME ;
         } else if (route.name === 'Tasks') {
           iconName = focused
           ? IMAGE.ICON_TASK_BLACK
           : IMAGE.ICON_TASK;
         } else if (route.name === 'Achievement') {
           iconName = focused
           ? IMAGE.ICON_ACHIEVEMENT_BLACK
           : IMAGE.ICON_ACHIEVEMENT;
         } else if (route.name === 'Store') {
           iconName = focused
           ? IMAGE.ICON_STORE_BLACK
           : IMAGE.ICON_STORE;
         }

         // You can return any component that you like here!
         return <Image source={iconName}
                  style={{width:20, height:20}}
                  resizeMode="contain"
                />;
       },
       tabBarActiveTintColor: 'white',
       tabBarInactiveTintColor: 'black',
       tabBarActiveBackgroundColor: '#828BC3',
       tabBarInactiveBackgroundColor: '#B2ADAB',
     })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <Tab.Screen name="Tasks" component={TaskScreen} options={navOptionHandler}/>
      <Tab.Screen name="Achievement" component={AchievementStack} options={navOptionHandler}/>
      <Tab.Screen name="Store" component={StoreScreen} options={navOptionHandler}/>
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator({navigation}){
  return(
    <Drawer.Navigator initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} options={navOptionHandler} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={navOptionHandler}/>
      <Drawer.Screen name="AppDescription" component={AppDescriptionScreen} options={navOptionHandler}/>
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen name="SignUp" component={SignUpScreen} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
