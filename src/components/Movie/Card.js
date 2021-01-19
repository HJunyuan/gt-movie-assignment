import { Link } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";

function MovieCard(props) {
  const { name, productionYear, genre, synopsisShort, image } = props;

  return (
    <Card style={{ maxWidth: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://picsum.photos/seed/${image}/300`}
        draggable="false"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-1">
          <Badge variant="info">{genre}</Badge>
        </Card.Subtitle>
        <Card.Text>{synopsisShort}</Card.Text>
        <Card.Link as={Link}>More details</Card.Link>
      </Card.Body>
      {/* TODO: Use date-fns */}
      <Card.Footer className="text-muted">{productionYear}</Card.Footer>
    </Card>
  );
}

export default MovieCard;
