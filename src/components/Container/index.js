import { Grid } from "rsuite";
import styled from "styled-components";

function Container({ children, ...props }) {
  return <StyledGrid {...props}>{children}</StyledGrid>;
}

const StyledGrid = styled(Grid)`
  padding: 0 1.3rem;
`;

export { Container };
