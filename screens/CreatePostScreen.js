import React, { useState, useEffect } from 'react';
import { Button, TextInput, Text, View } from 'react-native';


function CreatePostScreen({ navigation, route }) {

  const [postText, setPostText] = useState('');
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        // multiline
        placeholder="What's on your mind?"
        style={{ height: 40, width: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title='Done'
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </View>
  );
}

export default CreatePostScreen
