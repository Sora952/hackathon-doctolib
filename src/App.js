import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Gestion";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./firebase";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

const theme = createMuiTheme();

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <main style={{ flex: "1 0 auto" }}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </MuiThemeProvider>
    </div>
  ) : (
    <div id="loader">
      <CircularProgress />
    </div>
  );
}
