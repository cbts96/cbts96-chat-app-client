import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./component/Login/Login";
import "./App.css";
import Particle from "./component/Particle/Particle";
import MainPage from "./component/MainPage/Mainpage";

const App = () => {
  return (
    <div className="App">
      <Particle className="Particle" />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/main-page" component={MainPage}/>
          
        
      </Switch>
    </div>
  );
};

export default App;
