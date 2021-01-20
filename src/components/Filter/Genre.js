import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ALL_TEXT = "All Genres";

function GenreFilter(props) {
  const { allGenres = [], onSelect = () => {} } = props;

  const [selectedGenre, setSelectedGenre] = useState(ALL_TEXT);

  const dropdownItems = [ALL_TEXT, ...allGenres].map((genre, i) => (
    <Dropdown.Item
      key={i}
      onClick={() => {
        setSelectedGenre(genre);
        onSelect(genre);
      }}
      active={selectedGenre === genre}
    >
      {genre}
    </Dropdown.Item>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle className="mb-3">{selectedGenre}</Dropdown.Toggle>
      <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
    </Dropdown>
  );
}

export default GenreFilter;
