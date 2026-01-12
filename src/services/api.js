import axios from 'axios';
import { API_KEY, BASE_URL } from '../config/constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const loadPopularMovies = () => {
  setLoading(true);
  getPopularMovies()
    .then(res => setMovies(res.data.results))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
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

const handleSearch = (text) => {
  setQuery(text);

  if (text.length > 2) {
    setLoading(true);
    searchMovies(text)
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  } else {
    loadPopularMovies();
  }
};
