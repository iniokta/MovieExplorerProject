import axios from 'axios';
import { API_KEY, BASE_URL } from '../config/constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/popular', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await apiClient.get('/search/movie', {
      params: { query },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};