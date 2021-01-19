import styled from "styled-components";

function MovieGrid({ children }) {
  return <Grid>{children}</Grid>;
}

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export default MovieGrid;
