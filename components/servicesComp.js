import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ADIcons from 'react-native-vector-icons/AntDesign';

const ServicesComp = ({title, logo, navigation}) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#1A99DE',
        padding: 10,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <ADIcons name="arrowleft" color="white" size={30} />
        </TouchableOpacity>
        <View style={{marginRight: 10}}>
          <ADIcons name={`${logo}`} color="white" size={30} />
        </View>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
          {title}
        </Text>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{marginVertical: 20, padding: 20}}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="grey"
            style={{color: 'black'}}></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="grey"
            style={{color: 'black'}}></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Phone"
            placeholderTextColor="grey"
            style={{color: 'black'}}
            keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Amount"
            placeholderTextColor="grey"
            style={{color: 'black'}}
            keyboardType="numeric"></TextInput>
        </View>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => navigation.navigate('Successful')}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
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
    margin: 10,
  },
  inputView: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
});

export default ServicesComp;
