import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';

import Pizza from './pages/Pizza';
import Naan from './pages/Naan';
import About from './pages/About';
import Sandwich from './pages/Sandwich';
import Info from './pages/Info';
import Tacos from './pages/Tacos';
import Assete from './pages/Assete';


function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        
        <Redirect path='/home'/>
        <Switch >
          <Route path='/' exact component={Home}/>
          <Route path='/naan'   component={Naan} />
          <Route path='/pizza' component={Pizza} />
          <Route path='/assete' component={Assete} />
          <Route path='/about' component={About} />
          <Route path='/sandwich' component={Sandwich} />
          <Route path='/tacos' component={Tacos} />
          <Route path='/info' component={Info} />
         </Switch>
      </Router>
    </>
  );
}

export default App;
