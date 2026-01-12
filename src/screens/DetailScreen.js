import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { getMovieDetail } from '../services/api';
import { IMAGE_BASE_URL } from '../config/constants';

const DetailScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetail(movieId)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!movie) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: '#fff' }}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={styles.poster}
      />

      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.rating}>⭐ {movie.vote_average}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text style={styles.release}>
        Release Date: {movie.release_date}
      </Text>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
  },
  poster: {
    width: '100%',
    height: 450,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  rating: {
    color: '#FFD700',
    marginVertical: 5,
  },
  overview: {
    color: '#ccc',
    marginTop: 10,
    lineHeight: 20,
  },
  release: {
    color: '#999',
    marginTop: 10,
  },
  loading: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
