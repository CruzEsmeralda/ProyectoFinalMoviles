import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

const Acerca = () => {
    return (
        <View style={styles.container}>
      
        <Text>Acerca </Text>
        </View>
    )
}

export default Acerca

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
  