import React from 'react';
import { View } from "react-native";
import { Text, Button } from 'react-native-elements';

export default class UserPost extends React.Component {
render() {
  return (
    <View>
        <Text>{this.props.text}</Text>
        <Button title="Remove" onPress={() => this.props.remove(this.props.id)} />
    </View>
  );
}
}