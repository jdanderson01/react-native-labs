import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function MarketplaceItem () {

let [counter, setCounter] = useState([0]);

return (
    <View>
        <Text>Click to change the count! : {counter}</Text>
        <Button title="Click me to increase the snack of your choice!" onPress={() => {setCounter(counter + 1)} } />
        <Button title="Click me to decrease the snack of your choice!" onPress={() => {setCounter(counter - 1)} } />
    </View>
)
}