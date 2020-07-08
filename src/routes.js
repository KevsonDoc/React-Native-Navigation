import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image, View } from 'react-native';

import Home from './pages/Home';
import Mpas from './pages/Maps';
import Chat from './pages/Chat';
import User from './pages/User';

const Tab = createMaterialBottomTabNavigator();

function ImageHome(){
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Image style={{ width: 45, height: 45 }} source={require('../assets/round_home_black_18dp.png') }/>
    </View>
  );
}

function ImageMaps(){
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Image style={{ width: 45, height: 45 }} source={require('../assets/round_location_on_black_18dp.png') }/>
    </View>
  );
}

function ImageChat(){
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Image style={{ width: 45, height: 45 }} source={require('../assets/round_chat_black_18dp.png') }/>
    </View>
  );
}

function ImageUser(){
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Image style={{ width: 45, height: 45 }} source={require('../assets/baseline_account_circle_black_48.png') }/>
    </View>
  );
}

const Router = () => {

  return(
    <>
        <NavigationContainer >
          <Tab.Navigator labeled={ false }>
            <Tab.Screen options={{tabBarIcon: ({ color }) => (<ImageHome />) }} name="Home" component={ Home }/>
            <Tab.Screen options={{tabBarIcon: ({ color }) => (<ImageMaps />) }} name="Maps" component={ Mpas }/>
            <Tab.Screen options={{tabBarIcon: ({ color }) => (<ImageChat />) }} name="Chat" component={ Chat }/>
            <Tab.Screen options={{tabBarIcon: ({ color }) => (<ImageUser />) }} name="User" component={ User }/>
          </Tab.Navigator>
        </NavigationContainer>
    </>
  );
}

export default Router;