import React from 'react';
import { Rating, AirbnbRating } from 'react-native-elements';
import { StyleSheet, Text, View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const Comentarios = () => {
    return (
        <View style={styles.container}>
       
        <Text>Comentarios </Text>
        <AirbnbRating
  count={11}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={11}
  size={20}
/>

<Input
  placeholder='Escribe tu comentario'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>
        </View>
    )
}

export default Comentarios

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    tinyLogo:{
      width:350,
      height:250
    }
});
  