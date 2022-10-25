import React, {useState} from 'react';
import MatchupImageThree from "./MatchupImageThree";
import {View, StyleSheet, Pressable } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function ThirdMatchup(props) {

  const [winner, setWinner] = useState("");
  const pickThanos = () => {
    setWinner("Thanos")
  }

  const pickDarkseid = () => {
    setWinner("Darkseid")
  }

  return (
    <View style={styles.container}>
      <Pressable title="Darkseid" onPress= {pickDarkseid} style={styles.buttonDarkseid}>
       <Text style={styles.pressableText}>Darkseid</Text></Pressable>
       <br></br>
      <MatchupImageThree /> 
      <br></br>
      <Pressable title="Thanos" onPress= {pickThanos} style={styles.buttonThanos}>
       <Text style={styles.pressableText}>Thanos</Text></Pressable>
       <br></br>
       <Text style={styles.matchupText}> You chose: {winner} </Text>
       <br></br>
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <br></br>
      <Button
        title="Back to Second Matchup"
        onPress={() => props.navigation.navigate("Second Matchup")}
      />
    </View>
  );
  }

  const styles = StyleSheet.create({
    matchupText: {
      textAlign: "center",
    },

    container: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center"
    },

    buttonDarkseid: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 4,
      backgroundColor: "#708090",
    },

    buttonThanos: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 4,
      backgroundColor: "#BDB5D5",
    },

    pressableText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  });