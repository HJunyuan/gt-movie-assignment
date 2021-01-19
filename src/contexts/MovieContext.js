import { createContext, useEffect, useState } from "react";

import getMovies from "../api/getMovies";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState({ isReady: false });

  useEffect(() => {
    (async function () {
      const data = await getMovies();
      setData({ isReady: true, movies: data });
    })();
  }, []);

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};
