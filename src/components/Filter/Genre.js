import { CheckTreePicker } from "rsuite";

const DEFAULT_VALUE = "All Genres";

function GenreFilter(props) {
  const { allGenres, selected, onChange, className } = props;

  const dropdownItems = allGenres?.map((genre) => ({
    label: genre,
    value: genre,
  }));

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
      onChange={(selected) => {
        onChange(selected);
      }}
    />
  );
}

export default GenreFilter;
