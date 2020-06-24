import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <main style={{ flex: "1 0 auto" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            {/*  <Route exact path="/page1" component={Login} />
            <Route path="/page2" component={Regiter} />*/}
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
