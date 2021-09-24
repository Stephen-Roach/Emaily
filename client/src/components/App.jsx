import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Landing from './Landing/Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, [props]);

  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Landing />
          </Route>
          <Route path='/surveys'>
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default connect(null, actions)(App);
