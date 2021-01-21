import { useHistory } from "react-router-dom";
import { Badge, Panel, Placeholder, Icon, IconButton } from "rsuite";
import styled from "styled-components";
import { formatDistance } from "date-fns";

const WORD_LIMIT = 18;

function MovieCard(props) {
  const { name, productionYear, genre, synopsisShort, image, mockup } = props;
  const history = useHistory();

  function onClick() {
    history.push(`movie/${productionYear}/${encodeURI(name)}`);
  }

  if (mockup) {
    return (
      <Panel shaded bodyFill style={{ width: "100%" }}>
        <Placeholder.Graph height={300} active />
        <Panel>
          <Placeholder.Paragraph rows={1} rowHeight={25} />
          <Placeholder.Paragraph rows={4} rowMargin={3} />
        </Panel>
      </Panel>
    );
  }

  return (
    <Card shaded bodyFill onClick={onClick}>
      <img
        style={{ width: "100%", height: 300, objectFit: "cover" }}
        src={`https://picsum.photos/seed/${image}/480`}
        draggable="false"
      />
      <Panel>
        <CardTitle>{`${name} (${productionYear})`}</CardTitle>
        <CardBadge className="mb-2" content={genre} />
        <CardDescription>{truncate(synopsisShort, WORD_LIMIT)}</CardDescription>
        <CardFooter>
          <p>{formatDistance(new Date(productionYear, 0), new Date())}</p>
          <IconButton icon={<Icon icon="arrow-right" />} placement="right">
            Read more
          </IconButton>
        </CardFooter>
      </Panel>
    </Card>
    // <Card style={{ height: "100%", maxWidth: "18rem" }}>
    //   <Card.Img
    //     variant="top"
    //     src={`https://picsum.photos/seed/${image}/300`}
    //     draggable="false"
    //   />
    //   <Card.Body>
    //     <Card.Title>{name}</Card.Title>
    //     <Card.Subtitle className="mb-1">
    //       <Badge variant="info">{genre}</Badge>
    //     </Card.Subtitle>
    //     <Card.Text>{truncate(synopsisShort, WORD_LIMIT)}</Card.Text>
    //     <Card.Link as={Link} to={`movie/${productionYear}/${encodeURI(name)}`}>
    //       More details
    //     </Card.Link>
    //   </Card.Body>
    //   {/* TODO: Use date-fns */}
    //   <Card.Footer className="text-muted">{productionYear}</Card.Footer>
    // </Card>
  );
}

function truncate(str, max) {
  const array = str.trim().split(" ");
  const ellipsis = array.length > max ? "…" : "";

  return array.slice(0, max).join(" ") + ellipsis;
}

const Card = styled(Panel)`
  width: 100%;
  height: 100%;
  max-width: 360px;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
`;

const CardBadge = styled(Badge)`
  padding: 0.2rem 0.4rem;
  background: #4caf50;
`;

const CardDescription = styled.p`
  margin-bottom: 1rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default MovieCard;
