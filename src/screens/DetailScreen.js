import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { getMovieDetails } from '../services/api';
import { IMAGE_BASE_URL } from '../config/constants';
import LoadingSpinner from '../components/LoadingSpinner';

const DetailScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!movie) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Film tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.backdrop_path}` }}
        style={styles.backdrop}
      />
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Kembali</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        
        <View style={styles.metaContainer}>
          <Text style={styles.rating}>⭐ {movie.vote_average.toFixed(1)}</Text>
          <Text style={styles.meta}>📅 {movie.release_date}</Text>
          <Text style={styles.meta}>⏱️ {movie.runtime} menit</Text>
        </View>

        <View style={styles.genresContainer}>
          {movie.genres.map((genre) => (
            <View key={genre.id} style={styles.genreTag}>
              <Text style={styles.genreText}>{genre.name}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Sinopsis</Text>
        <Text style={styles.overview}>{movie.overview}</Text>

        {movie.tagline && (
          <>
            <Text style={styles.sectionTitle}>Tagline</Text>
            <Text style={styles.tagline}>"{movie.tagline}"</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backdrop: {
    width: '100%',
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  rating: {
    color: '#ffd700',
    fontSize: 16,
    marginRight: 15,
  },
  meta: {
    color: '#999',
    fontSize: 14,
    marginRight: 15,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  genreTag: {
    backgroundColor: '#e50914',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  genreText: {
    color: '#fff',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  overview: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 22,
  },
  tagline: {
    color: '#ffd700',
    fontSize: 16,
    fontStyle: 'italic',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetailScreen;