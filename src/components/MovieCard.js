import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { IMAGE_BASE_URL } from '../config/constants';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>
        <Text style={styles.rating}>⭐ {movie.vote_average.toFixed(1)}</Text>
        <Text style={styles.date}>{movie.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  poster: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  info: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    color: '#ffd700',
    fontSize: 14,
    marginBottom: 3,
  },
  date: {
    color: '#999',
    fontSize: 12,
  },
});

export default MovieCard;