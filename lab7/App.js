import "react-native-gesture-handler";
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "react-navigation-stack";
import MarketplaceItem from "./Marketplace"
import { StyleSheet, Text, View, FlatList, } from 'react-native';


const Stack = createStackNavigator();

const user = {
  username: "Change your username."
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Screen name="Marketplace" component={MarketplaceItem} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
