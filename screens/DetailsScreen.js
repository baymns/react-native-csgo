import React, { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, Text, View, SafeAreaViewBase } from 'react-native';
import Constants from 'expo-constants';
import { images } from '../assets/cs/images';
import ShowGameInfo from './ShowGameInfo';

function Item({ title, name, format, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item} >
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.format}>{format}</Text>
          {/* <Button
            title='Show details'
            onPress={() => navigation.navigate('ShowGameInfo', {
              // name: 'Custom details header!'
            })} /> */}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

function DetailsScreen({ navigation, route }) {

  const [matches, setMatches] = useState(null)

  useEffect(() => {
    fetch('https://api.sportsdata.io/v3/csgo/scores/json/Competitions?key=52ed53d3cbad495fa7b81d1e373aceef')
      .then(response => response.json())
      .then(jsondata => setMatches(jsondata.splice(16, 18)))
  }, [])

  if (matches) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={matches}
          renderItem={({ item, index }) => <Item title={item.AreaName} onPress={() => navigation.navigate({name: "ShowGameInfo", params:{matchId: 1} })} name={item.Name} format={item.Format} image={images[index]} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    )
  }
  return (
    < View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No matches</Text>
      <Button
        title='Go to Details again'
      />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    // backgroundColor: '#1e9fef',
    // backgroundImage: require(uri),
    // padding: 20,
    height: 180,
    marginVertical: 4,
    marginHorizontal: 5,
  },
  image: {
    flex: 1,
    // width: 300,
    // height: 140,
    padding: 20,
    resizeMode: "cover",
    justifyContent: "center"
  },
  title: {
    color: '#fff',
    fontSize: 16,
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


export default DetailsScreen

// const fetchData = async () => {
//   let url = 'https://api.sportsdata.io/v3/csgo/scores/json/Competitions?key=52ed53d3cbad495fa7b81d1e373aceef';
//   let req = await fetch(url)
// let res = await req.json()
//   return req;
// } 
// https://go2den.com/tournament-api/get-tournaments?gameSlug=csgo&filter=all&utmSource=source-test&utmMedium=medium-test
// let url = "https://api.pandascore.co/csgo/matches?token=OoNS_WRdfERbPRUD1s-xScBpem2vdk_svej3k1v2ZT3ARDP7-9Y&filter[id]=551934"
// curl -H 'Authorization: Bearer OoNS_WRdfERbPRUD1s-xScBpem2vdk_svej3k1v2ZT3ARDP7-9Y' 'https://api.pandascore.co/csgo/champions'
// curl "https://api.pandascore.co/csgo/matches?token=OoNS_WRdfERbPRUD1s-xScBpem2vdk_svej3k1v2ZT3ARDP7-9Y&filter[id]=551934"

// fetch('https://sportsdata.io/developers/api-documentation/csgo#/free/competitions-leagues?key=52ed53d3cbad495fa7b81d1e373aceef')
    //   .then(response => response.json())
    //   .then(jsondata => {
      //     setResponse(jsondata)
      //   })

      // fetch('https://api.sportsdata.io/v3/csgo/scores/json/Competitions?key=52ed53d3cbad495fa7b81d1e373aceef')
      //   .then(response => response.json())
      //   .then(jsondata => {
        //     for (let i = jsondata.length - 1; i > 13; i--) { setResponse(jsondata[i]) }
        //   })
    // setResponse(res)
