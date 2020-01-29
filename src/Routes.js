import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

const Routes = () => (
  <Switch>
    <Route path="/signup" component={Pages.Signup} />
    <Route path="/login" component={Pages.Login} />
    <Route exact path="/" component={Pages.Home} />
  </Switch>
);

export default Routes;
