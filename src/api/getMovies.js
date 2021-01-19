import axios from "axios";

const ENDPOINT = "https://sometimes-maybe-flaky-api.gdshive.io";

const getMovies = async () => {
  const { data } = await axios.get(ENDPOINT);
  return data;
};

export default getMovies;
