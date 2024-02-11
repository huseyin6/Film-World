import React, {useState, useEffect} from 'react';
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
import {Header, SearchBox, Loading} from '../../components';
import {fetchFilms} from './HomeScreen.helper';
import styles from './HomeScreen.styles';
import {PRIMARY_COLOR} from '../../styles';

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
  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    setLoadingMore(true);
    const data = await fetchFilms(searchQuery, nextPage);
    setFilms(prevFilms => [...prevFilms, ...data]);
    setLoadingMore(false);
  };

  const renderItem = ({item}) => (
    <View style={styles.filmContainer}>
      <TouchableOpacity onPress={() => navigateToDetail(item.imdbID)}>
        <View style={styles.item}>
          <Image source={{uri: item.Poster}} style={styles.poster} />
          <View style={styles.details}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.info}>
              {item.Type} - {item.Year}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return <Loading visible={true} />;
  }

  return (
    <View style={styles.container}>
      <Header title={'Films'} showBackButton={false} />
      <SearchBox
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
        placeholderText={'Type to Search Films...'}
      />
      {films.length !== 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={films}
            renderItem={renderItem}
            keyExtractor={item => item.imdbID.toString()}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.2}
            ListFooterComponent={
              loadingMore && (
                <ActivityIndicator size="large" color={PRIMARY_COLOR} />
              )
            }
          />
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>There is nothing to show right now!</Text>
          <Text style={styles.text}>
            Please search for the films that you want to view.
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
