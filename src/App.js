import './App.css';
import React from 'react';
import  { Redirect } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login';
import Mcq from './Components/Mcq/Mcq';
import Summary from './Components/Summary/Summary';
import Submit from './Components/Submit/Submit';

function App() {
  return (
   <div>
     <Switch>
       <Route path='/submit' component={Submit} />
       <Route path='/summary' component={Summary} />
       <Route path='/mcq' component={Mcq} />
       <Route path='/' component={Login} />
     </Switch>
   </div>
  );
}

export default App;
