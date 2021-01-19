import Menu from "./components/Menu";
import Main from "./views/Main";

import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Menu />
      <Main />
    </MovieProvider>
  );
}

export default App;
