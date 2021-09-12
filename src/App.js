import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/stranice/home/Home";
import LG from "./components/reusable/LG";
import { Podaci } from "./components/data/Podaci";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    const bgrs = Podaci.map((LG) => {
      return LG.background;
    });
    setBackgrounds([...bgrs]);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact 
            path="/"
            render={() => <Home backgrounds={backgrounds} />}
          />
          <Route
            exact
            path="/home"
            render={() => {
              return <Home backgrounds={backgrounds} />;
            }}
          />
          <Route
            exact
            path="/LG/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <LG LG={Podaci[id]} />;
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
