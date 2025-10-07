import axios from "axios";

const API_KEY = "9b3b5ce2"; // 🔒 Pega aquí tu key de OMDb
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      s: query,
      apikey: API_KEY,
    },
  });
  return response.data;
}

export async function getMovieDetails(imdbID) {
  const response = await axios.get(BASE_URL, {
    params: {
      i: imdbID,
      apikey: API_KEY,
    },
  });
  return response.data;
}
