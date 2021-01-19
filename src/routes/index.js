import { Switch, Route } from "react-router-dom";

import Main from "../views/Main";

const routes = (
  <Switch>
    <Route path="/" component={Main} exact />
  </Switch>
);

export default routes;
