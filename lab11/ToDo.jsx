import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Item from "./Item";

export default function TODOList () {
    const [lists, setLists] = useState([]);
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    
    function remove (id) {
        let tempLists = lists.filter((item) => {
            return item.id !== id
        });

         setLists(tempLists);
    }


    return (
        <View style={styles.container}>
            <FlatList 
                data={lists}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Item text={item.text} remove={remove} id={item.id} />
                        </View>
                    )
                }}
            />
        <Text>Enter your task:</Text>
        <TextInput onChangeText={setText} style={styles.bar} />
        <Button title="Update To-Do List!" onPress={() => {
            let tempLists = lists.concat([{
                index: count, 
                text: text
            }]);
            setCount
    (count + 1);
            setLists(tempLists);
        }} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    bar: {
        height: 27,
        margin: 15,
        borderWidth: 2,
        padding: 8,
        borderRadius: 15,
        borderColor: "red"
      },

  });