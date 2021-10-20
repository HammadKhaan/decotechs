import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.main}>
      <ScrollView>
        <View
          style={{
            //justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://decotechs.com/static/media/deco2.cb468169.png',
            }}
            style={{width: 250, height: 100}}
            resizeMode="contain"
          />
        </View>
        <View>
          <View>
            <Text style={styles.text}>Login</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="gray"
                style={{color: 'black'}}
                onChangeText={e => setEmail(e)}
                value={email}></TextInput>
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="gray"
                style={{color: 'black'}}
                secureTextEntry={true}
                onChangeText={e => setPassword(e)}
                value={password}></TextInput>
            </View>
            <View style={{paddingHorizontal: 120}}>
              <TouchableOpacity
                style={styles.textView}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text2}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#1A99DE',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 30,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
  inputView: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    elevation: 10,
  },
  form: {
    paddingHorizontal: 30,
  },
  textView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 7,
    margin: 10,
    elevation: 10,
  },
  text2: {
    color: '#1A99DE',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Login;
