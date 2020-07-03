import React, { useState, useEffect } from 'react';
import { Button, TextInput, TouchableOpacity, Text, View } from 'react-native';


function ShowGameInfo(props) {

  const [postText, setPostText] = useState('');
  console.log(props)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Show</Text>
      <Button
        title='Done'
        onPress={() => {
          // Pass params back to home screen
          props.navigation.navigate('Home', { post: postText });
        }}
      />
    </View>
  );
}

export default ShowGameInfo
