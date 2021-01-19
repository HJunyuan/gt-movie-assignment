import { createContext, useEffect, useState } from "react";

import getMovies from "../api/getMovies";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState({ isReady: false });

  useEffect(() => {
    (async function () {
      const data = await getMovies();
      setMovies({ isReady: true, ...data });
    })();
  }, []);

  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};
