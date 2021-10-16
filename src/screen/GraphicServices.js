import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ServicesComp from '../../components/servicesComp';

const GraphicServices = ({navigation}) => {
  return (
    <View>
      <ServicesComp
        title="Graphic Design"
        logo="videocamera"
        navigation={navigation}
      />
    </View>
  );
};

export default GraphicServices;
