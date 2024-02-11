import React, {useState, useEffect, memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  VirtualizedList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header, SearchBox} from '../../components';
import {fetchFilms} from './HomeScreen.helper';
import styles from './HomeScreen.styles';
import {PRIMARY_COLOR} from '../../styles';
import * as Progress from 'react-native-progress';

interface Film {
  imdbID: number;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [films, setFilms] = useState<Film[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const navigateToDetail = (imdbID: string) => {
    setTimeout(() => {
      navigation.navigate('Detail', {imdbID});
    }, 1000);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setPage(1);
      handleSearch();
      setRefreshing(false);
    }, 1000);
  };

  const handleSearch = async () => {
    // console.log('Query:', searchQuery);

    setLoading(true);
    const data = await fetchFilms(searchQuery, 1);
    setFilms(data);
    setLoading(false);
  };

  // For Pagination
  const handleLoadMoreFilms = async () => {
    if (!loadingMore) {
      const nextPage = page + 1;
      setPage(nextPage);

      setLoadingMore(true);
      const data = await fetchFilms(searchQuery, nextPage);
      setFilms(prevFilms => [...prevFilms, ...data]);
      setLoadingMore(false);
    }
  };

  // Use memo for performance optimizing for both Poster and FilmItem
  const Poster = memo(({uri}: {uri: string}) => (
    <Image source={{uri}} style={styles.poster} />
  ));

  const FilmItem = memo(
    ({
      item,
      navigateToDetail,
    }: {
      item: Film;
      navigateToDetail: (id: string) => void;
    }) => (
      <View style={styles.filmContainer}>
        <TouchableOpacity onPress={() => navigateToDetail(item.imdbID)}>
          <View style={styles.item}>
            <Poster uri={item.Poster} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.Title}</Text>
              <Text style={styles.info}>
                {item.Type} - {item.Year}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    ),
  );

  const renderItem = ({item}) => (
    <FilmItem item={item} navigateToDetail={navigateToDetail} />
  );

  return (
    <View style={styles.container}>
      <Header title={'Films'} showBackButton={false} />
      <SearchBox
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
        placeholderText={'Type to Search Films...'}
      />

      {loading && (
        <View style={styles.progressBar}>
          <Progress.Bar
            progress={0.4}
            width={380}
            height={9}
            color={PRIMARY_COLOR}
          />
          <Text style={styles.barText}>Loading Films...</Text>
        </View>
      )}

      {!loading &&
        (films.length !== 0 ? (
          <View style={styles.listContainer}>
            <FlatList
              data={films}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              onEndReached={handleLoadMoreFilms}
              onEndReachedThreshold={0.2}
              ListFooterComponent={
                loadingMore && (
                  <ActivityIndicator size="large" color={PRIMARY_COLOR} />
                )
              }
              removeClippedSubviews={true}
            />
          </View>
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.text}>There is nothing to show right now!</Text>
            <Text style={styles.text}>
              Please search for the films that you want to view.
            </Text>
          </View>
        ))}
    </View>
  );
};

export default HomeScreen;
