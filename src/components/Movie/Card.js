import { Link } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";

const WORD_LIMIT = 18;

function MovieCard(props) {
  const { name, productionYear, genre, synopsisShort, image } = props;

  return (
    <Card style={{ height: "100%", maxWidth: "18rem" }}>
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
        <Card.Text>{truncate(synopsisShort, WORD_LIMIT)}</Card.Text>
        <Card.Link as={Link} to="">
          More details
        </Card.Link>
      </Card.Body>
      {/* TODO: Use date-fns */}
      <Card.Footer className="text-muted">{productionYear}</Card.Footer>
    </Card>
  );
}

function truncate(str, max) {
  const array = str.trim().split(" ");
  const ellipsis = array.length > max ? "…" : "";

  return array.slice(0, max).join(" ") + ellipsis;
}

export default MovieCard;
