import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const nav = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
      <Text>Hello World</Text>
      <Button  title="============ | User | ============" onPress={ () => { nav.navigate('Users') } }/>
    </View>
  );
}

export default Home;