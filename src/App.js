import React from 'react';
import './App.css';
import Home from './container/Home/Home';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" exact>
          <Home />
       </Route>
       <Route path="/about">
          <About />
       </Route>
       <Route path="/contact">
          <Contact />
       </Route>
     </Switch>
   </Router>    
  );
}

export default App;
