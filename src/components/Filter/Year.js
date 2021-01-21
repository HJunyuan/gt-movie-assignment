import { useState } from "react";
import { RangeSlider, Placeholder } from "rsuite";

function YearFilter(props) {
  const { allYears, onChange, className } = props;

  const minMax = allYears && [allYears[0], allYears[allYears.length - 1]];

  if (!minMax) {
    return <Placeholder.Paragraph rows={1} />;
  }

  return (
    <RangeSlider
      className={className + " ml-3 mr-4"}
      graduated
      progress
      defaultValue={minMax}
      min={minMax[0]}
      max={minMax[1]}
      renderMark={(mark) => {
        if (minMax.includes(mark)) return String(mark);
        else if (mark % 2 !== 0) return <small>{String(mark)}</small>;
      }}
      onChange={(selected) => {
        onChange(range(...selected));
      }}
    />
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
