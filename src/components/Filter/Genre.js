import { useState } from "react";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";

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
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>Filter by genre:</InputGroup.Text>
      </InputGroup.Prepend>
      <DropdownButton as={InputGroup.Append} title={selectedGenre}>
        {dropdownItems}
      </DropdownButton>
    </InputGroup>
  );
}

export default GenreFilter;
