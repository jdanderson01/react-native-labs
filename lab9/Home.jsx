import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function Home(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the great debate! Here you'll vote for which character you think
          is the strongest in his or her matchup!
      </Text>
      <Button
        title="First Matchup"
        onPress={() => props.navigation.navigate("First Matchup")}
      />
    </View>
  );
}