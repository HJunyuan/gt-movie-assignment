import { useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Badge, Placeholder } from "rsuite";
import styled from "styled-components";
import DOMPurify from "dompurify";
import { formatDistance } from "date-fns";

import { SEO } from "../components/SEO";
import { MovieContext } from "../contexts/MovieContext";
import { Container } from "../components/Container";
import generateGenreColour from "../utilities/genreColour";

function MovieView() {
  let { year, name } = useParams();
  const { isReady, movies } = useContext(MovieContext);

  year = Number(year);
  name = decodeURI(name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!isReady) {
    return (
      <Container>
        <Placeholder.Graph height={400} active />
        <Placeholder.Paragraph className="my-5" rows={1} rowHeight={30} />
        <Placeholder.Paragraph rows={10} rowMargin={3} />
        <Placeholder.Paragraph rows={6} rowMargin={3} />
      </Container>
    );
  } else if (
    /* Redirect to 404 when no such movie exist */
    !(
      movies.map((movie) => movie.productionYear).includes(year) &&
      movies.map((movie) => movie.name).includes(name)
    )
  ) {
    return <Redirect to="/404" />;
  } else {
    /* Display Movie Details */
    const { genre, synopsis, synopsisShort, image } = movies.find(
      (movie) => movie.productionYear === year && movie.name === name
    );

    return (
      <Container>
        <SEO title={`${name} (${year})`} description={synopsisShort} />
        <img
          alt={`${name} (${year})`}
          style={{
            width: "100%",
            height: 400,
            objectFit: "cover",
            borderRadius: "0 0 6px 6px",
          }}
          src={`https://picsum.photos/seed/${image}/1000`}
          draggable="false"
        />
        <h1 className="my-2">{name}</h1>
        <p>
          <b>Production Year</b>:{" "}
          {`${year} (${formatDistance(new Date(year, 0), new Date())} ago)`}
        </p>
        <StyledBadge className="my-2" content={genre} />
        <br />
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(synopsis) }}
        />
      </Container>
    );
  }
}

export default MovieView;

const StyledBadge = styled(Badge)`
  padding: 0.2rem 0.4rem;
  background: ${({ content }) => generateGenreColour(content)};
`;
