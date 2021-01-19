import { BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu";
import { MovieProvider } from "./contexts/MovieContext";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Menu />
        {routes}
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
