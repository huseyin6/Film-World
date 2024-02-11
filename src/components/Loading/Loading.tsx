import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './Loading.styles';
import {PRIMARY_COLOR} from '../../styles';

interface LoadingProps {
  visible: boolean;
}

const Loading: React.FC<LoadingProps> = ({visible}) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={PRIMARY_COLOR} />
    </View>
  );
};

export default Loading;
