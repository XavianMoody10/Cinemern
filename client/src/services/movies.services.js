import axios from "axios";

async function getNowPlayingMovies() {
  const url = "http://localhost:3001/movies/now_playing";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    const errorCodes = [404];
    const status = error?.response?.status;

    if (status && errorCodes.includes(status)) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}

export { getNowPlayingMovies };
