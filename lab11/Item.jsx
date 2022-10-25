import React from "react";
import { View } from "react-native";
import { Text, CheckBox } from "react-native-elements";

export default class Item extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.text}</Text>
                <CheckBox title="Remove completed task!" onPress={() => this.props.remove()} />
            </View>
        )
    }
}
