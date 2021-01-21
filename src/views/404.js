import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../components/Container";

function NotFound() {
  return (
    <Container>
      <Content>
        <h1>Oops, invalid page.</h1>
        <p>
          Let's head back <Link to="/">home</Link>.
        </p>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  min-height: 80vh;
  padding-top: 20vh;
  text-align: center;
`;

export default NotFound;
