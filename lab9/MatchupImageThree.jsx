import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const MatchupImageThree = () => (
  <View>
    <Image source = {{uri:"https://www.thewrap.com/wp-content/uploads/2016/11/Darkseid-618x400.jpg"}}
   style={styles.imageDarkseid}
   />
    <Text style={styles.matchupText}>
        Vs.
      </Text>
   <Image source = {{uri:"https://78.media.tumblr.com/358ded894efc37069200b10d52d40e67/tumblr_pedn931m1t1s1sqdw_1280.jpg"}}
   style={styles.imageThanos}
   />
   </View>
 )

 const styles = StyleSheet.create({
  matchupText: {
    textAlign: "center",
  },

  imageDarkseid: {
    width: 250,
    height: 250,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "#818589"
  },

  imageThanos: {
    width: 250,
    height: 250,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "#C3B1E1"
  },
});

 export default MatchupImageThree