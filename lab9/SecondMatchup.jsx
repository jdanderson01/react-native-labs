import React, {useState} from 'react';
import MatchupImageTwo from "./MatchupImageTwo";
import {View, StyleSheet, Pressable } from 'react-native';
import { Text, Button} from 'react-native-elements';

export default function SecondMatchup(props) {

  const [winner, setWinner] = useState("");
  const pickTaskmaster = () => {
    setWinner("Taskmaster")
  }

  const pickBatman = () => {
    setWinner("Batman")
  }

  return (
    <View style={styles.container}>
     <Pressable title="Taskmaster" onPress= {pickBatman} style={styles.buttonBatman}>
       <Text style={styles.pressableText}>Batman</Text> </Pressable>
        <br></br>
      <br></br>
      <MatchupImageTwo /> 
      <br></br>
      <Pressable title="Taskmaster" onPress= {pickTaskmaster} style={styles.buttonTaskmaster}>
        <Text style={styles.pressableText}>Taskmaster</Text> </Pressable>
      <br></br>
      <Text style={styles.matchupText}> You chose: {winner} </Text>
      <br></br>
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <br></br>
      <Button
        title="Back to First Matchup"
        onPress={() => props.navigation.navigate("First Matchup")}
      />
      <br></br>
      <Button
        title="Third Matchup"
        onPress={() => props.navigation.navigate("Third Matchup")}
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

    buttonBatman: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 4,
      backgroundColor: "#818589",
    },

    buttonTaskmaster: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 4,
      backgroundColor: "#36454F",
    },

    pressableText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },

  });