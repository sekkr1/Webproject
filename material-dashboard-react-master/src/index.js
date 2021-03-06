/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "layouts/Login"
import Register from "layouts/Register"
import {Provider} from "react-redux"
import PrivateRoute from "./protectedRoute"
import {useSelector} from 'react-redux'
import store from "store"
import decode from "jwt-decode";
import setAuth from "actions/jwtActions"
import {useDispatch} from "react-redux";

// core components
import Admin from "layouts/Admin.js";
//import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

if(localStorage.jwtToken){
  store.dispatch(setAuth(decode(localStorage.jwtToken), localStorage.jwtToken))
}

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <PrivateRoute path="/admin" component={Admin} />
      <Route exact path="/" component={Login} />

    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
