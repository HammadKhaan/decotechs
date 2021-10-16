import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ServicesComp from '../../components/servicesComp';

const ITServices = ({navigation}) => {
  return (
    <View>
      <ServicesComp
        title="IT Consultancy"
        logo="info"
        navigation={navigation}
      />
    </View>
  );
};

export default ITServices;
