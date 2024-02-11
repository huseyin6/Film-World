import {StyleSheet, Dimensions} from 'react-native';
import {GRAY_COLOR, BLACK_COLOR} from '../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    width: width * 0.45,
    height: width * 0.64,
    marginTop: width * 0.05,
    marginBottom: width * 0.05,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  listContainer: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    marginTop: width * 0.025,
    marginBottom: width * 0.025,
    marginLeft: width * 0.025,
  },
  key: {
    fontWeight: 'bold',
    marginLeft: width * 0.025,
    fontSize: width * 0.04,
    color: BLACK_COLOR,
  },
  value: {
    flex: 1,
    fontSize: width * 0.04,
    color: BLACK_COLOR,
  },
  separator: {
    height: 1,
    backgroundColor: GRAY_COLOR,
  },
});

export default styles;
