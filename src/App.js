import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import Home from "../src/screens/Home";

const App = props => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    
  </React.Fragment>
)

export default withRouter(App);
