import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <Container>
      <h1>404 Not Found</h1>
      <p>
        Let's head back <Link to="/">home</Link>.
      </p>
    </Container>
  );
}

export default NotFound;
