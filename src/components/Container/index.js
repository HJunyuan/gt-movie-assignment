import { Grid } from "rsuite";
import styled from "styled-components";

function Container({ children }) {
  return <StyledGrid>{children}</StyledGrid>;
}

const StyledGrid = styled(Grid)`
  padding: 0 2rem;
`;

export { Container };
