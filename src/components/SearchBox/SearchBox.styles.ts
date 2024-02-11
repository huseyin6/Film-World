import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, BLACK_COLOR} from '../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.025,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: width * 0.05,
    marginLeft: width * 0.0125,
    marginRight: width * 0.0125,
  },
  searchBox: {
    flex: 1,
    marginLeft: width * 0.025,
    color: BLACK_COLOR,
  },
  searchIcon: {
    padding: width * 0.02,
  },
});

export default styles;
