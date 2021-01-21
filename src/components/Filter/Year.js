import { useCallback, useEffect, useState } from "react";
import { RangeSlider, Placeholder } from "rsuite";
import debounce from "lodash/debounce";

function YearFilter(props) {
  const { allYears, onChange, className } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const minMax = allYears && [allYears[0], allYears[allYears.length - 1]];

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  /* Add eventListener for Window resize events */
  useEffect(() => {
    const debHandleResize = debounce(handleResize, 500);
    window.addEventListener("resize", debHandleResize);
    return () => {
      window.removeEventListener("resize", debHandleResize);
    };
  }, [handleResize]);

  if (!minMax) {
    return <Placeholder.Paragraph rows={1} />;
  }

  return (
    <RangeSlider
      className={className + " ml-3 mr-4"}
      defaultValue={minMax}
      min={minMax[0]}
      max={minMax[1]}
      step={windowWidth < 470 ? 3 : 1}
      renderMark={(mark) => {
        if (minMax.includes(mark) || windowWidth < 470) return String(mark);
        else if (mark % 2 !== 0) return <small>{String(mark)}</small>;
      }}
      onChange={(selected) => {
        onChange(range(...selected));
      }}
      graduated
      progress
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
