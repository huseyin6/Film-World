import {StyleSheet, Dimensions} from 'react-native';
import {WHITE_COLOR} from '../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
});

export default styles;
