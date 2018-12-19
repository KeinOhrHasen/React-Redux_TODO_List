import React from "react";
import { Route, Redirect } from "react-router-dom";
import fakeAuth from "../../services/fakeAuth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
          return !fakeAuth.isAuth ? <Redirect to="/"/> : <Component {...props} />
        }}
    />
);
export default PrivateRoute;