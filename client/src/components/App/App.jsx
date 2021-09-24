import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';

const App = () => {
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

export default App;
