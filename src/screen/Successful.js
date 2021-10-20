import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ADIcons from 'react-native-vector-icons/AntDesign';
const Successful = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#1A99DE',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ADIcons name="checkcircleo" color="lightgreen" size={60} />
      <Text style={{color: 'lightgreen', fontSize: 18, marginTop: 10}}>
        Successful!
      </Text>
      <TouchableOpacity
        style={styles.textView}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#1A99DE',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 7,
    margin: 35,
  },
});

export default Successful;
