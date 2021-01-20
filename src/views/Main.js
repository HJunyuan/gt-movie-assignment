import { useContext, useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";

import { MovieContext } from "../contexts/MovieContext";

import { MovieCard, MovieGrid } from "../components/Movie";
import { GenreFilter } from "../components/Filter";

function initMovieReducer(movies = []) {
  return {
    allMovies: movies,
    filtered: movies,
  };
}

function movieReducer(state, action) {
  switch (action.type) {
    case "filter-genre":
      const { genre } = action;

      if (genre === "All Genres") {
        return { ...state, filtered: state.allMovies };
      }

      const filtered = state.allMovies.filter((movie) => movie.genre === genre);
      return { ...state, filtered };
    case "reset":
      return initMovieReducer(action.payload);
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function Main() {
  const { isReady, movies, genres, years } = useContext(MovieContext);
  const [movieDictionary, dispatchMovieFilter] = useReducer(
    movieReducer,
    movies,
    initMovieReducer
  );

  useEffect(() => {
    if (isReady) {
      dispatchMovieFilter({ type: "reset", payload: movies });
    }
  }, [isReady, movies]);

  if (!isReady) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <GenreFilter
        allGenres={genres}
        onSelect={(genre) => {
          dispatchMovieFilter({ type: "filter-genre", genre });
        }}
      />
      <MovieGrid>{genMovieCards(movieDictionary.filtered)}</MovieGrid>
    </Container>
  );
}

function genMovieCards(movies) {
  return movies.map((movie, i) => <MovieCard key={i} {...movie} />);
}

export default Main;
