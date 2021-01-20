import { CheckTreePicker } from "rsuite";
import { useState } from "react";

const DEFAULT_VALUE = "All Genres";

function GenreFilter(props) {
  const { allGenres, onChange } = props;
  const [someState, setSomeState] = useState([DEFAULT_VALUE]);

  const dropdownItems = allGenres?.map((genre) => ({
    label: genre,
    value: genre,
  }));

  return (
    <CheckTreePicker
      defaultExpandAll={true}
      block={true}
      data={[
        {
          label: "Genres",
          value: DEFAULT_VALUE,
          children: dropdownItems,
        },
      ]}
      value={someState}
      defaultValue={[DEFAULT_VALUE]}
      onChange={(val) => {
        setSomeState(val);
        onChange(val);
      }}
    />
  );
}

export default GenreFilter;
