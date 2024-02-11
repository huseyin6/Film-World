import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Header, Loading} from '../../components';
import {
  fetchFilmDetail,
  getFilmDetailFromLocalStorage,
  saveFilmDetailToLocalStorage,
} from './DetailScreen.helper';
import styles from './DetailScreen.styles';

const DetailScreen = props => {
  // Get the ID from prop
  const imdbID = props.route.params.imdbID;

  const [filmDetail, setFilmDetail] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Check the movie in LocalStorage
      const localFilmDetail = await getFilmDetailFromLocalStorage(imdbID);

      if (localFilmDetail) {
        setFilmDetail(localFilmDetail);
      } else {
        const detail = await fetchFilmDetail(imdbID);
        setFilmDetail(detail);
        saveFilmDetailToLocalStorage(imdbID, detail);
      }
    };

    fetchData();
  }, [imdbID]);

  if (!filmDetail) {
    return <Loading visible={true} />;
  }

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    imdbRating,
    imdbVotes,
    type,
    totalSeasons,
  } = filmDetail;

  const subHeadings = [
    {key: 'Title', value: Title},
    {key: 'Year', value: Year},
    {key: 'Rated', value: Rated},
    {key: 'Released', value: Released},
    {key: 'Runtime', value: Runtime},
    {key: 'Genre', value: Genre},
    {key: 'Director', value: Director},
    {key: 'Writer', value: Writer},
    {key: 'Actors', value: Actors},
    {key: 'Plot', value: Plot},
    {key: 'Language', value: Language},
    {key: 'Country', value: Country},
    {key: 'Awards', value: Awards},
    {key: 'IMDb Rating', value: imdbRating},
    {key: 'IMDb Votes', value: imdbVotes},
  ];

  const renderSubHeadings = () => {
    return subHeadings.map((item, index) => (
      <View key={item.key}>
        <View style={styles.item}>
          <Text style={styles.key}>{item.key}:</Text>
          <Text style={styles.value}>
            {'\t'}
            {item.value}
          </Text>
        </View>
        {index !== subHeadings.length - 1 && (
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
          </View>
        )}
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Header title={Title} showBackButton={true} />
      <Image source={{uri: Poster}} style={styles.poster} />
      <View style={styles.listContainer}>{renderSubHeadings()}</View>
    </ScrollView>
  );
};

export default DetailScreen;
