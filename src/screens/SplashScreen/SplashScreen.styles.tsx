import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE_COLOR,
  },
  text: {
    fontWeight: 'bold',
    fontSize: width * 0.08,
    color: PRIMARY_COLOR,
  },
});

export default styles;
