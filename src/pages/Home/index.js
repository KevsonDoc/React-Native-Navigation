import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { RectButton } from 'react-native-gesture-handler';

const Home = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(counter + 1)
  }, [counter]);

  return (
      <>
        <View style={styles.container}>
            <View style={styles.perfil}>
              <View style={styles.avatar}>
                <Avatar size="large" rounded source={require('../../../assets/13780609-high-.jpg')}/>
              </View>
              <View style={styles.name}>
                <Text style={styles.nameText}>O Doutor</Text>
              </View>
            </View>
            <View style={styles.feed}>
              <View style={styles.buttonContainer}>
                <RectButton style={styles.buuton} onPress={ () => {handle()} }>
                  <Text>Add feed</Text>
                </RectButton>
              </View>
              <Text>dssssssssssssssssssssssdkfsldfksj</Text>
            </View>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  perfil: {
    height: 150,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    backgroundColor: "rgba(0,191,255, 0.5)",
    flexDirection: "row"
  },

  avatar: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  name: {
    justifyContent: "center",
    marginLeft: 10,
  },

  nameText: {
    fontSize: 25,
    fontWeight: "bold",
  },

  feed: {
    height: "100%",
    flex: 1
  },

  buttonContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red"
  },

  buuton: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 45,
    backgroundColor: "#00FF7F",
  }
});

export default Home;