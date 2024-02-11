import {API} from '../../config';

export const fetchFilms = async (query: string, page: number) => {
  // console.log('Page', page);

  const response = await fetch(`${API}&s=${query}&page=${page}&type=movie`);
  if (response.status === 200) {
    // console.log(response);
    const films = await response.json();
    // console.log('LOG: Films: ', films.Search);
    return films.Search ? films.Search : [];
  }
  return [];
};
