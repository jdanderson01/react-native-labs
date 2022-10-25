import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const MatchupImage = () => (
  <View>
    <Image source = {{uri:"https://i.pinimg.com/originals/ab/0f/e1/ab0fe13cffd4358f864b565fc9971bfc.png" }}
   style={styles.imageThor}
   />
    <Text style={styles.matchupText}>
        Vs.
      </Text>
   <Image source = {{uri:"https://www.greenscene.co.id/wp-content/uploads/2019/03/Superman.jpg" }}
   style={styles.image}
   />
   </View>
  )

 const styles = StyleSheet.create({
  matchupText: {
    textAlign: "center",
  },

  imageThor: {
    width: 250,
    height: 250,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "#30D5C8"
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "red"
  },
});

 export default MatchupImage
 