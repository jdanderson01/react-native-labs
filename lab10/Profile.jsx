import React, { useState } from "react";
import {View, TextInput, StyleSheet} from "react-native";
import { Button, Text} from "react-native-elements";

export default function Profile (props) {

    const [username, setUsername] = useState("");

    return (
        <View>
            <TextInput style={styles.input}
            onChangeText={setUsername} />
            <Text>New username will appear here: {username}</Text>
            <Button
            title="Home"
            onPress={() => props.navigation.navigate("Home")} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    
    input: {
        height: 27,
        margin: 15,
        borderWidth: 2,
        padding: 8,
        borderRadius: 15,
        borderColor: "royalblue"
      },

  });