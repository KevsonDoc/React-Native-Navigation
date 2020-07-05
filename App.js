import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home';
import Users from './src/Users';

const Stack = createStackNavigator();

const App = () => {

  return(
    <>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;