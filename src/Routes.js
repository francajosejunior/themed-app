import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './features/dashboard'
import Login from './features/login'
import PrivateRoutes from './PrivateRoutes'
// import Home from "./features/home";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/auth" exact component={Login} />
        <PrivateRoutes path="/" exact component={Dashboard} />
        <PrivateRoutes path="/dashboard" exact component={Dashboard} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
