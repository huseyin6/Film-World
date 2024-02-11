import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    height: width * 0.14,
    paddingHorizontal: width * 0.0375,
  },
  title: {
    flex: 1,
    color: WHITE_COLOR,
    fontSize: width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    left: width * 0.0125,
  },
});
export default styles;
