import { Switch, Route } from "react-router-dom";

import Main from "../views/Main";
import Movie from "../views/Movie";
import NotFound from "../views/404";

const routes = (
  <Switch>
    <Route path="/movie/:year/:name" component={Movie} exact />
    <Route path="/" component={Main} exact />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
