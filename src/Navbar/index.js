import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const nav = useNavigation();
  
  return (
      <>
        <View >
          <RectButton style={ styles.botton } onPress={ () => { nav.navigate('Home') } }>
            <Text>Button</Text>
          </RectButton>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  botton: {
    width: 200,
    height: 25,
    backgroundColor: 'blue',
    justifyContent: 'center', alignItems: 'center'
  }
})

export default Navbar;