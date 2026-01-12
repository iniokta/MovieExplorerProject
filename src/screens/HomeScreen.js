import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import { getPopularMovies, searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = () => {
    getPopularMovies()
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));
  };

  const handleSearch = (text) => {
    setQuery(text);

    if (text.length > 2) {
      searchMovies(text)
        .then(res => setMovies(res.data.results))
        .catch(err => console.log(err));
    } else {
      loadPopularMovies();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movie..."
        placeholderTextColor="#999"
        style={styles.input}
        value={query}
        onChangeText={handleSearch}
      />

      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate('Detail', { movieId: item.id })
            }
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
});
