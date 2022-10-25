import "react-native-gesture-handler";
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./Login";
import ToDo from "./ToDo";
import Profile from "./Profile.jsx";

const Stack = createStackNavigator();

const user = {
  username: "Change your username."
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="ToDo" component={ToDo} initialParams={user} />
          <Stack.Screen name="Profile" component={Profile} initialParams={user} />
          <Stack.Screen name="Login" component={Login} initialParams={user} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
