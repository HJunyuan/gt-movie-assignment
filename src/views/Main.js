import { useContext, useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";

import { MovieContext } from "../contexts/MovieContext";

import { MovieCard, MovieGrid } from "../components/Movie";
import { GenreFilter, YearFilter } from "../components/Filter";

function initMovieReducer({ movies, genres, years }) {
  return {
    /* Dictionaries */
    allMovies: movies,
    allGenres: genres,
    allYears: years,

    /* Variables */
    filterParams: { genres, years },
    filtered: movies,
  };
}

function filterMovies(movies, filterParams) {
  const { genres, years } = filterParams;
  return movies.filter(
    (movie) =>
      genres.includes(movie.genre) && years.includes(movie.productionYear)
  );
}

function movieReducer(state, action) {
  const newState = { ...state };

  switch (action.type) {
    case "filter-years":
      const { years } = action;

      newState.filterParams.years = [...years];
      newState.filtered = filterMovies(state.allMovies, newState.filterParams);

      return newState;
    case "filter-genres":
      const { genre } = action;

      /* Add all genres */
      if (genre === "All Genres") {
        newState.filterParams.genres = state.allGenres;
      } else {
        newState.filterParams.genres = [genre];
      }

      newState.filtered = filterMovies(state.allMovies, newState.filterParams);

      return newState;
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
    { movies, genres, years },
    initMovieReducer
  );

  /* Initialise movieDictionary when MovieContext supplies data */
  useEffect(() => {
    if (isReady) {
      dispatchMovieFilter({
        type: "reset",
        payload: { movies, genres, years },
      });
    }
  }, [isReady, movies, genres, years]);

  if (!isReady) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h1 className="mb-4">Movies</h1>
      <Container className="mb-4 d-flex">
        <GenreFilter
          allGenres={genres}
          onSelect={(genre) => {
            dispatchMovieFilter({ type: "filter-genres", genre });
          }}
        />
        <YearFilter
          minYear={years[0]}
          maxYear={years[years.length - 1]}
          onChange={(years) => {
            dispatchMovieFilter({ type: "filter-years", years });
          }}
        />
      </Container>
      <MovieGrid>{genMovieCards(movieDictionary.filtered)}</MovieGrid>
    </Container>
  );
}

function genMovieCards(movies) {
  if (!movies || movies.length === 0) {
    return <p>Sorry, there are no movies that matches your filter.</p>;
  }
  return movies.map((movie, i) => <MovieCard key={i} {...movie} />);
}

export default Main;
