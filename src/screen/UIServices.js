import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ServicesComp from '../../components/servicesComp';

const UIServices = ({navigation}) => {
  return (
    <View>
      <ServicesComp
        title="UI/UX Design"
        logo="antdesign"
        navigation={navigation}
      />
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

export default UIServices;
