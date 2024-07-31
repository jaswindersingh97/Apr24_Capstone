import axios from 'axios';

const BASE_URL = 'https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/get-by-genre';
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;
const API_HOST = import.meta.env.VITE_APIHUB_HOST;
const API_ENDPOINT = import.meta.env.VITE_APIHUB_ENDPOINT;

const fetchMovies = async (genre = 'action') => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BASE_URL}?genre=${genre}`,
    headers: {
      'x-apihub-key': API_KEY,
      'x-apihub-host': API_HOST,
      'x-apihub-endpoint': API_ENDPOINT,
    },
  }

  try {
    const response = await axios.request(config);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return null;
  }
};

export default fetchMovies;
