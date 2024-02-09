import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

const DetailScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title={'Film Başlık'} showBackButton={true} />
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  description: {
    marginLeft: 24,
    color: '#000',
    marginBottom: 30,
    fontSize: 16,
  },
});

export default DetailScreen;
