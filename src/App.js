import { BrowserRouter } from "react-router-dom";

import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { MovieProvider } from "./contexts/MovieContext";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Menu />
        {routes}
        <Footer />
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
