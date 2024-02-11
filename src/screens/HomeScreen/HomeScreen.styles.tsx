import {StyleSheet, Dimensions} from 'react-native';
import {
  PRIMARY_COLOR,
  LIGHT_GRAY,
  BLACK_COLOR,
  WHITE_COLOR,
} from '../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_GRAY,
  },
  listContainer: {
    flex: 1,
    borderColor: WHITE_COLOR,
  },
  filmContainer: {
    marginTop: width * 0.0375,
    padding: width * 0.025,
    borderWidth: width * 0.0125,
    backgroundColor: WHITE_COLOR,
    borderColor: WHITE_COLOR,
    borderRadius: width * 0.0125,
    marginLeft: width * 0.025,
    marginRight: width * 0.025,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  poster: {
    width: width * 0.2,
    height: width * 0.3,
    marginRight: width * 0.025,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: BLACK_COLOR,
  },
  info: {
    fontSize: width * 0.035,
    color: BLACK_COLOR,
  },
  textContainer: {
    flex: 1,
    marginBottom: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: BLACK_COLOR,
    fontSize: width * 0.04,
  },
});

export default styles;
