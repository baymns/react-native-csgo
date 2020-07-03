import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import DrawerContent from './screens/DrawerContent';
import ShowGameInfo from './screens/ShowGameInfo';

const HomeStack = createStackNavigator();
const ShowGameInfoStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen({ navigation }) {

  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1b1c23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Home screen',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25}
            backgroundColor='#1b1c23'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>)
      }} />
    </HomeStack.Navigator>
  )
}

function ShowGameInfoStackScreen({ navigation, route }) {
  console.log(route, "ghg")
  return (
    <ShowGameInfoStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1b1c23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <ShowGameInfoStack.Screen name='ShowGameInfo' component={ShowGameInfo} options={{
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25}
            backgroundColor='#1b1c23'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>)
      }} />
    </ShowGameInfoStack.Navigator>
  )
}

function DetailsStackScreen({ navigation, route }) {
  return (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1b1c23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <DetailsStack.Screen name='Tournaments' component={DetailsScreen} options={{
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25}
            backgroundColor='#1b1c23'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>)
      }} />
    </DetailsStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name='ShowGameInfo' component={ShowGameInfoStackScreen} />
        <Drawer.Screen name="Tournaments" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App
