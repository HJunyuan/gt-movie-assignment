import { Switch, Route } from "react-router-dom";

import Main from "../views/Main";
import NotFound from "../views/404";

const routes = (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
