import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { MovieContext } from "../contexts/MovieContext";

import { MovieCard, MovieGrid } from "../components/Movie";

function Main() {
  const { isReady, movies } = useContext(MovieContext);
  const [movieCards, setMovieCards] = useState([]);

  useEffect(() => {
    if (!isReady) return;

    const cards = movies.map((movie, i) => <MovieCard key={i} {...movie} />);
    setMovieCards(cards);
  }, [isReady, movies]);

  if (!isReady) {
    return <Container>Loading...</Container>;
  }

  return <Container>{<MovieGrid>{movieCards}</MovieGrid>}</Container>;
}

export default Main;
