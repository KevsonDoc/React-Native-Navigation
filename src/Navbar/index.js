import React from 'react';
import { View, Text, StyleSheet, Image }from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const nav = useNavigation();
  
  return (
    <>
      <View style={styles.container}>
        <RectButton style={ styles.botton } onPress={ () => { nav.navigate('Home') } }>
          <Image style={ { width: 40, height: 40 } } source={ require('../../assets/baseline_account_circle_black_48.png') }/>
        </RectButton>
        <RectButton style={ styles.botton } onPress={ () => { nav.navigate('Home') } }>
          <Image style={ { width: 40, height: 40 } } source={ require('../../assets/round_home_black_18dp.png') }/>
        </RectButton>
        <RectButton style={ styles.botton } onPress={ () => { nav.navigate('Home') } }>
          <Image style={ { width: 40, height: 40 } } source={ require('../../assets/round_location_on_black_18dp.png') }/>
        </RectButton>
        <RectButton style={ styles.botton } onPress={ () => { nav.navigate('Home') } }>
          <Image style={ { width: 40, height: 40 } } source={ require('../../assets/round_chat_black_18dp.png') }/>
        </RectButton>
      </View>
    </>
  ); 
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: 393,
    height: 45,
    justifyContent: 'space-between'
  },
  botton: {
    height: 45,
    width: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  } 
});

export default Navbar;