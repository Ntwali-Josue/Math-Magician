import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </Router>
);

export default App;
