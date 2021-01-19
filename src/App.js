import { useEffect, useState } from "react";
import getMovies from "./api/getMovies";
import { Container } from "react-bootstrap";

import Menu from "./components/Menu";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    (async function () {
      const data = await getMovies();
      setData(data);
      console.log(data);
    })();
  }, []);

  return (
    <>
      <Menu />
      <Container>{JSON.stringify(data)}</Container>
    </>
  );
}

export default App;
