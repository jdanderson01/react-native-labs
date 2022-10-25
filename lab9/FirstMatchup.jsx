import React, {useState} from 'react';
import MatchupImage from "./MatchupImage";
import {View, StyleSheet, Pressable } from 'react-native';
import {Text, Button} from 'react-native-elements';

export default function FirstMatchup(props) {

  const [winner, setWinner] = useState("");
  const pickThor = () => {
    setWinner("Thor")
  }

  const pickSuperman = () => {
    setWinner("Superman")
  }



  return (
    <View style={styles.container}>
      <Pressable title="Thor" onPress= {pickThor} style={styles.buttonThor}>
        <Text style={styles.pressableText}>Thor</Text> </Pressable>
        <br></br>
      <MatchupImage /> 
      <br></br>
      <Pressable title="Superman" onPress= {pickSuperman} style={styles.buttonSuperman}> 
        <Text style={styles.pressableText}>Superman</Text>
      </Pressable>
      <br></br>
      <Text style={styles.matchupText}> You chose: {winner} </Text>
      <br></br>
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate("Home")}
        style={styles.pressableText}
      />
      <br></br>
      <Button
        title="Second Matchup"
        onPress={() => props.navigation.navigate("Second Matchup")}
        style={styles.pressableText}
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

    buttonThor: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 4,
      backgroundColor: "#30D5C8",
    },
  
    buttonSuperman: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 4,
      backgroundColor: "red",
    },

    pressableText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  });