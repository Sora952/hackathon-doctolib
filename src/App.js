import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
