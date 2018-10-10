import React from "react";
import { Switch } from "react-router";
import Index from "../pages/index";
import Login from "../pages/login";
import changePassword from "../pages/change-password";
import PrivateRoute from "./private-route";
import AuthRoute from "./auth-route";

const routes = (
  <div>
    <Switch>
      <AuthRoute path="/login" component={Login} />
      <AuthRoute path="/change-password" component={changePassword} />
      <PrivateRoute exact path="/" component={Index} />
    </Switch>
  </div>
);

export default routes;
