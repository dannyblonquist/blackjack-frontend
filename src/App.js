import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/nav/Header";
import Home from "./components/pages/Home";
import Game from "./components/pages/Game";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
