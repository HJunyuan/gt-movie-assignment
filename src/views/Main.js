import { useContext, useEffect, useState } from "react";
import { Panel } from "rsuite";
import styled from "styled-components";

import { MovieContext } from "../contexts/MovieContext";

import { MovieCard, MovieGrid } from "../components/Movie";
import { GenreFilter, YearFilter } from "../components/Filter";
import { Container } from "../components/Container";

function Main() {
  const { isReady, movies, genres, years } = useContext(MovieContext);
  const [filterParams, setFilterParams] = useState({ genres, years });

  /* Initialise filterParams when isReady */
  useEffect(() => {
    if (isReady) {
      setFilterParams({ genres, years });
    }
  }, [isReady, genres, years]);

  return (
    <Container>
      <h1 className="mt-4">Movies</h1>
      <Panel
        className="my-4"
        header="Filters"
        defaultExpanded={false}
        collapsible
        bordered
      >
        <PanelGrid>
          <div>
            <p className="mb-4">
              <b>By Year</b>
            </p>
            <YearFilter
              allYears={years}
              onChange={(selected) => {
                setFilterParams((o) => ({ ...o, years: selected }));
              }}
            />
          </div>
          <div>
            <p className="mb-2">
              <b>By Genres</b>
            </p>
            <GenreFilter
              allGenres={genres}
              onChange={(selected) => {
                setFilterParams((o) => ({ ...o, genres: selected }));
              }}
            />
          </div>
        </PanelGrid>
      </Panel>
      <MovieGrid>{filteredMovies(movies, filterParams)}</MovieGrid>
    </Container>
  );
}

function filteredMovies(movies, { genres, years }) {
  if (!movies || !genres || !years) {
    return mockup();
  }

  const filtered = movies.filter(
    (movie) =>
      (genres.includes(movie.genre) || genres.includes("All Genres")) &&
      years.includes(movie.productionYear)
  );
  return genMovieCards(filtered);
}

function genMovieCards(movies) {
  if (!movies || movies.length === 0) {
    return <p>Sorry, there are no movies that matches your filter.</p>;
  }
  return movies.map((movie, i) => <MovieCard key={i} {...movie} />);
}

function mockup() {
  const count = 8;
  const mockups = [];

  for (let i = 0; i < count; i++) mockups.push(<MovieCard key={i} mockup />);

  return mockups;
}

const PanelGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  overflow-x: auto;
`;

export default Main;
