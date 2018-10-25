import React from "react";
import { Switch } from "react-router";
import Summary from "../pages/summary";
import Registro from "../pages/registro";
import Politica from "../pages/politica";
import Analisis from "../pages/analisis";
import Login from "../pages/login";
import changePassword from "../pages/change-password";
import PrivateRoute from "./private-route";
import AuthRoute from "./auth-route";

const routes = (
  <div>
    <Switch>
      <AuthRoute path="/login" component={Login} />
      <AuthRoute path="/change-password" component={changePassword} />
      <PrivateRoute exact path="/" component={Summary} />
      <PrivateRoute exact path="/registro" component={Registro} />
      <PrivateRoute exact path="/politica" component={Politica} />
      <PrivateRoute exact path="/analisis" component={Analisis} />
    </Switch>
  </div>
);

export default routes;
