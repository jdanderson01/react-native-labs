import React from 'react';
import { Text, Button, Card } from 'react-native-elements';

export default function UserPost(props) {

  return (
    <Card>
        <Card.Title>Post {props.index}</Card.Title>
        <Text>{userInput}</Text>
        <Button title="Delete post" onPress={() => props.remove(props.index)} />
    </Card>
  );
}