import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ServicesComp from '../../components/servicesComp';

const WebServices = ({navigation}) => {
  return (
    <View>
      <ServicesComp
        title="Web Development"
        logo="codesquare"
        navigation={navigation}
      />
    </View>
  );
};

export default WebServices;
