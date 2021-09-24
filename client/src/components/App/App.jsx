import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Landing} />
          <Route path='/surveys' component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
