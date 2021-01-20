import { createContext, useEffect, useState } from "react";

import getMovies from "../api/getMovies";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState({ isReady: false });

  useEffect(() => {
    (async function () {
      const movies = await getMovies();

      const uniqueYears = new Set(movies.map((movie) => movie.productionYear));
      const sortedYears = Array.from(uniqueYears).sort();

      const uniqueGenres = new Set(movies.map((movie) => movie.genre));
      const sortedGenres = Array.from(uniqueGenres).sort();

      setData({
        isReady: true,
        movies,
        years: sortedYears,
        genres: sortedGenres,
      });
    })();
  }, []);

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};
