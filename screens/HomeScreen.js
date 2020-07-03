import React, { useState, useEffect } from 'react';
import { Button, ImageBackground, StyleSheet, TextInput, Text, View } from 'react-native';
import { homebgi } from '../assets/cs/images';
import Constants from 'expo-constants';
import ShowGameInfo from './ShowGameInfo';

function HomeScreen({ navigation, route }) {
  // console.log('HomeScreen>>>>', route);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor: '#30313c'  }}>
      <ImageBackground source={homebgi} style={styles.image}>
         {/* <Text style={styles.title}>Counter-Strike: Global Offensive</Text> */}
      </ImageBackground>
      {/* <Button
        title="Update screen title"
        onPress={() => navigation.setOptions({
          title: 'Title was updated!'
        })}
      />*/}
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title='Go to Details screen'
        onPress={() => navigation.navigate('ShowGameInfo', {
          itemId: 1,
          text: 'Here you\'ll see details',
          // name: 'Custom details header!'
        })} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#30313c'
  },
  // item: {
  //   // backgroundColor: '#1e9fef',
  //   // backgroundImage: require(uri),
  //   padding: 20,
  //   marginVertical: 5,
  //   marginHorizontal: 16,
  // },
  image: {
    flex: 1,
    // flexWrap: "wrap",
    width: 374,
    // marginLeft: 4,
    // height: 450,
    // maxHeight: 120,
    // padding: 20,
    // resizeMode: "cover",
    // textAlign: "centre",
    // justifyContent: "center"
  },
  title: {
    color: '#fff',
    marginVertical: 80,
    paddingLeft: 40,
    fontSize: 22,
  },
  format: {
    color: '#fff',
    fontSize: 18,
  },
  name: {
    color: '#fff',
    fontSize: 22,
  },
});
export default HomeScreen
