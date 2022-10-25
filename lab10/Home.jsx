import React from "React";
import {View, Button} from "react-native";
import Timeline from "./Timeline";
export default function Home(props) {
    return (
        <View> 
            <Timeline />
             <Button title="Go to Profiles"
             onPress={() => props.navigation.navigate("Profile")} />
        </View>

    );
}