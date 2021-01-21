import { useCallback, useEffect, useState } from "react";
import { RangeSlider, Placeholder } from "rsuite";
import debounce from "lodash/debounce";

function YearFilter(props) {
  const { allYears, selected, onChange, className } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  if (!allYears) {
    return <Placeholder.Paragraph rows={1} />;
  }

  return (
    <RangeSlider
      className={className + " ml-3 mr-4"}
      value={selected}
      min={0}
      max={allYears.length - 1}
      renderMark={(mark) => {
        if (mark === 0 || mark === allYears.length - 1 || windowWidth > 470)
          return allYears[mark];
        else return <small>{allYears[mark]}</small>;
      }}
      onChange={onChange}
      tooltip={false}
      graduated
      progress
    />
  );
}

export default YearFilter;
