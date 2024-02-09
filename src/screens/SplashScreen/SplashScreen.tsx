import React, {useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1300);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoşgeldin!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
});

export default SplashScreen;
