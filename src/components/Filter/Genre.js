import { useState, useEffect } from "react";
import { CheckTreePicker } from "rsuite";

const DEFAULT_VALUE = "All Genres";

function GenreFilter(props) {
  const { allGenres, onChange, className } = props;
  const [selected, setSelected] = useState([DEFAULT_VALUE]);

  const dropdownItems = allGenres?.map((genre) => ({
    label: genre,
    value: genre,
  }));

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  return (
    <CheckTreePicker
      className={className}
      defaultExpandAll={true}
      block={true}
      data={[
        {
          label: "Genres",
          value: DEFAULT_VALUE,
          children: dropdownItems,
        },
      ]}
      value={selected}
      // defaultValue={}
      onChange={(selected) => {
        setSelected(selected);
        onChange(selected);
      }}
    />
  );
}

export default GenreFilter;
