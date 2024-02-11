import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './SplashScreen.styles';

const SplashScreen = () => {
  // Changes Made
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1300);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Film World</Text>
    </View>
  );
};

export default SplashScreen;
