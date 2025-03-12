import React from 'react';
import Home from './routes/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';

const MovieApp = () => {
  return (
    <Router>
      <Switch>
        <Route path='/character/:id'>
          <Detail />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default MovieApp;
