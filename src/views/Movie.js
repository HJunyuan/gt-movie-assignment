import { useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import { MovieContext } from "../contexts/MovieContext";

function MovieView() {
  let { year, name } = useParams();
  const { isReady, movies } = useContext(MovieContext);

  year = Number(year);
  name = decodeURI(name);

  if (!isReady) {
    return <Container>Loading...</Container>;
  } else if (
    /* Redirect to 404 when no such movie exist */
    !(
      movies.map((movie) => movie.productionYear).includes(year) &&
      movies.map((movie) => movie.name).includes(name)
    )
  ) {
    return <Redirect to="/404" />;
  }

  return (
    <Container>
      <h1>{decodeURI(name)}</h1>
      <p>{year}</p>
    </Container>
  );
}

export default MovieView;
