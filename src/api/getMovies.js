import axios from "axios";

const ENDPOINT = "https://sometimes-maybe-flaky-api.gdshive.io";

const getMovies = async () => axios.get(ENDPOINT);

const getMoviesRetry = async () => {
  return getMovies()
    .then((response) => {
      console.log("Successfully retrieved data from API.");
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      console.log("API unreachable. Retrying now...");
      return getMoviesRetry();
    });
};

export default getMoviesRetry;
