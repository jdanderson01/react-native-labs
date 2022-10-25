import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Button, Text, Card } from 'react-native-elements';
import UserPost from "./UserPost"

export default function Timeline() {

    const [userPosts, setUserPosts] = useState([]);
    const [id, setId] = useState(0);
    const [userInput, setUserInput] = useState("");
    const remove = (index) => {
        let tempUserPosts = userPosts.filter(entry => entry.index != index);
        setUserPosts(tempUserPosts);
    }; 
    return (
    <View style={styles.container}>
         <TextInput 
  onChangeText={setUserInput}
  style={styles.input}
/>w
  <Button title="Post to timeline!" onPress={() => {
  let tempUserPosts = userPosts.concat({index: id});
  setId(id + 1);
  setUserPosts(tempUserPosts);
}} />

{
  userPosts.map((entry) => {
    return <UserPost index={entry.index} remove={remove} key={entry.index} />
  })
}
    <FlatList 
            data={userPosts}
            renderItem={() => {
                return (
                    <View>
                        <Text>{userInput}</Text>
                    </View>
                )
            }}    
        />
    </View>

    );
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        height: 27,
        margin: 15,
        borderWidth: 2,
        padding: 8,
        borderRadius: 15,
        borderColor: "red"
      },

  });
  