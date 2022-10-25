import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./Login";
import Home from "./Home";
import FirstMatchup from "./FirstMatchup";
import SecondMatchup from "./SecondMatchup"
import ThirdMatchup from "./ThirdMatchup";



const Stack = createStackNavigator();

const user = {
  username: ""
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} initialParams={user}/>
      <Stack.Screen name="Home" component={Home} initialParams={user}/>
      <Stack.Screen name="First Matchup" component={FirstMatchup} initialParams={user}/>
      <Stack.Screen name="Second Matchup" component={SecondMatchup} initialParams={user}/>
      <Stack.Screen name="Third Matchup" component={ThirdMatchup} initialParams={user}/>
      </Stack.Navigator>
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
