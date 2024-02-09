import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateMovieDetail = (id: number) => {
    // setTimeout(() => {
    //   navigation.navigate('Detail');
    // }, 1000);
  };

  return (
    <View style={styles.container}>
      <Header title={'Filmler'} showBackButton={false} />
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
