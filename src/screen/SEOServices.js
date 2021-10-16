import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ServicesComp from '../../components/servicesComp';

const SEOServices = ({navigation}) => {
  return (
    <View>
      <ServicesComp
        title="SEO & Marketing"
        logo="layout"
        navigation={navigation}
      />
    </View>
  );
};

export default SEOServices;
