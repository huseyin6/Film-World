import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BackIcon} from '../Icons';
import {useNavigation} from '@react-navigation/native';

export default function Header({title, showBackButton}) {
  const navigation = useNavigation();

  function handleBackPress() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showBackButton && (
        <TouchableOpacity style={styles.button} onPress={handleBackPress}>
          <BackIcon size={25} color="#FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#218EAE',
    height: 60,
    paddingHorizontal: 15,
  },
  title: {
    flex: 1,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    left: 16,
  },
});
