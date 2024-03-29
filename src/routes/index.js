import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ListClient from '../pages/ListClient';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" component={ListClient} />
    </Switch>
  );
}
