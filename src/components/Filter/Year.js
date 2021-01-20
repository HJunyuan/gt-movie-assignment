import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { RangeSlider } from "rsuite";

function YearFilter(props) {
  const { minYear, maxYear, onChange = () => {} } = props;

  const [yearRange, setYearRange] = useState([minYear, maxYear]);

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>Filter by year:</InputGroup.Text>
      </InputGroup.Prepend>
      <InputGroup.Append>
        <InputGroup.Text
          className="py-3 px-5"
          style={{ background: "#ffffff" }}
          as="div"
        >
          <RangeSlider
            style={{ width: "200px" }}
            defaultValue={yearRange}
            step={3}
            min={minYear}
            max={maxYear}
            graduated
            progress
            renderMark={(mark) => mark}
            onChange={(val) => {
              setYearRange(val);
              onChange(range(...val));
            }}
          />
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
}

function range(lowEnd, highEnd) {
  const list = [];
  for (let i = lowEnd; i <= highEnd; i++) {
    list.push(i);
  }
  return list;
}

export default YearFilter;
