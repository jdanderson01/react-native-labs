import React, {useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Input, Text, Button} from 'react-native-elements';

export default function Login(props) {

  const [username, setUsername] = useState(props.route.params.username);
  const [password, setPassword] = useState("");

  function checkAuth() {
    if(username == "student" && password == "employee") {
      props.navigation.replace("Home");
    }
  }

  return (
    <View>
      <Text h2>Username:</Text>
      <Input
        style={styles.firstInput}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
       />
      <Text h2>Password</Text>
      <TextInput
        style={styles.secondInput}
        placeholder="Password" 
        onChangeText={setPassword}
        secureTextEntry={true} />
      <Button title="Submit" onPress={() => {checkAuth()}} />
    </View>
  );
}

const styles = StyleSheet.create({
  firstInput: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    borderRadius: 7,
    borderColor: "#4169e1",
    padding: 10,
  },

  secondInput: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    borderRadius: 7,
    borderColor: "#4169e1",
    padding: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  