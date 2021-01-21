import styled from "styled-components";

import { Container } from "../Container";

function Footer() {
  return (
    <Container>
      <Foot>
        By{" "}
        <a
          href="https://github.com/hjunyuan"
          rel="noopener noreferrer"
          target="_blank"
        >
          Kyle Huang Junyuan
        </a>
      </Foot>
    </Container>
  );
}

const Foot = styled.footer`
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

export { Footer };
