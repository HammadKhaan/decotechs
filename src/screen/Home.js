import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ADIcons from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  const services = [
    {name: 'UI/UX Design', logo: 'antdesign', short: 'UI'},
    {name: 'Web Development', logo: 'codesquare', short: 'Web'},
    {name: 'Mobile App Development', logo: 'mobile1', short: 'Mobile'},
    {name: 'IT Consultancy', logo: 'info', short: 'IT'},
    {name: 'Graphic Design', logo: 'videocamera', short: 'Graphic'},
    {name: 'SEO & Marketing', logo: 'layout', short: 'SEO'},
  ];
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://decotechs.com/static/media/deco2.cb468169.png',
            }}
            style={{width: 250, height: 100}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.text}>Services</Text>
        </View>
        <View>
          <FlatList
            data={services}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    margin: 10,
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    borderRadius: 8,
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    navigation.navigate(`${item.short}`);
                  }}>
                  <View style={{marginHorizontal: 10}}>
                    <ADIcons name={`${item.logo}`} size={30} color="#1A99DE" />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      flex: 5,
                    }}>
                    <ADIcons name="right" color="#1A99DE" size={15} font />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
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
  },
});
export default Home;
