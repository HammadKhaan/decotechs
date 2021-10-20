import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';

const Landing = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View>
        <Image
          source={{
            uri: 'https://decotechs.com/static/media/deco2.cb468169.png',
          }}
          style={{width: 250, height: 250}}
          resizeMode="contain"
        />
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.textView}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#1A99DE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
  text: {
    color: '#1A99DE',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});

export default Landing;
