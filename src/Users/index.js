import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../Navbar';

const Users = () => {
  return (
    <>
      <View>
        <Text>Hello World</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
        <Navbar />
      </View>
    </>
  );
}

export default Users;