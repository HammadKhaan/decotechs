import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ServicesComp from '../../components/servicesComp';

const MobileServices = ({navigation}) => {
  return (
    <View>
      <ServicesComp
        title="Mobile App Development"
        logo="mobile1"
        navigation={navigation}
      />
    </View>
  );
};

export default MobileServices;
