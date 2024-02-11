import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackIcon} from '../Icons';
import {useNavigation} from '@react-navigation/native';
import styles from './Header.styles';
import {WHITE_COLOR} from '../../styles';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, showBackButton}) => {
  const navigation = useNavigation();

  function handleBackPress() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showBackButton && (
        <TouchableOpacity style={styles.button} onPress={handleBackPress}>
          <BackIcon size={25} color={WHITE_COLOR} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
