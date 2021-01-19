import { useContext } from "react";
import { Container } from "react-bootstrap";

import { MovieContext } from "../contexts/MovieContext";

function Main() {
  const movies = useContext(MovieContext);

  if (!movies.isReady) {
    return <Container>Loading...</Container>;
  }

  return <Container>{JSON.stringify(movies)}</Container>;
}

export default Main;
