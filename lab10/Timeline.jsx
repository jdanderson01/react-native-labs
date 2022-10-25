import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Button, Text, Card } from 'react-native-elements';
import UserPost from "./UserPost"

export default function Timeline() {

    const [userPosts, setUserPosts] = useState([]);
    const [id, setId] = useState(0);
    const [userInput, setUserInput] = useState("");

    function remove(id) {
        let tempArray = userPosts.filter((item) => {
            return item.id !== id 
        });
        setUserPosts(tempArray);
    }
    return (
        <View>
            <FlatList
                data={userPosts}
                renderItem={({item}) => {
                    return (
                        <Card>
                            <UserPost text={item.text} remove={remove} id={item.id}/>
                        </Card>
                    )
                }
            }
             /> 
             <Text>Type post:</Text>
             <TextInput onChangeText={setUserInput} style={styles.input}/>
             <Button title="Submit" onPress={() => {
                 setUserPosts(userPosts.concat({
                    id: id,
                    text: userInput
                 }));
                 setId(id +1);
    } }/>   
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
        borderColor: "royalblue"
      },

  });