import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../config';

export const fetchFilmDetail = async (imdbID: string) => {
  const response = await fetch(`${API}&i=${imdbID}`);
  if (response.status === 200) {
    const detail = await response.json();
    // console.log('LOG: Film Detail: ', detail);
    return detail;
  }
  return null;
};

export const getFilmDetailFromLocalStorage = async (imdbID: string) => {
  try {
    const filmDetail = await AsyncStorage.getItem('film_' + imdbID);
    return filmDetail ? JSON.parse(filmDetail) : null;
  } catch (err) {
    console.error('Error getting film detail from local storage:', err);
    return null;
  }
};

export const saveFilmDetailToLocalStorage = async (
  imdbID: string,
  filmDetail: any,
) => {
  try {
    await AsyncStorage.setItem('film_' + imdbID, JSON.stringify(filmDetail));
    return true;
  } catch (err) {
    console.error('Error saving film detail to local storage:', err);
    return null;
  }
};
