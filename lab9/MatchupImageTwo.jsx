import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const MatchupImageTwo = () => (
  <View>
    <Image source = {{uri:"https://i.pinimg.com/736x/d8/ab/93/d8ab936f4417dc06ac16af7f15e94508.jpg"}}
   style={styles.imageTaskmaster}
   />
    <Text style={styles.matchupText}>
        Vs.
      </Text>
   <Image source = {{uri:"https://i.pinimg.com/originals/45/28/5b/45285ba32d1d87432d5a62d9bb714ddd.jpg"}}
   style={styles.imageBatman}
   />
   </View>
 )

 const styles = StyleSheet.create({
  matchupText: {
    textAlign: "center",
  },

  imageBatman: {
    width: 250,
    height: 250,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "#818589"
  },

  imageTaskmaster: {
    width: 250,
    height: 250,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "#36454F"
  },
});

 export default MatchupImageTwo