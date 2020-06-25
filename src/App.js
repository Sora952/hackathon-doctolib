import React, { useState, useEffect } from "react";
import "./App.css";
import LoginP from "./pages/LoginP";
import LoginD from "./pages/LoginD";
import Register from "./pages/Register";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import { List } from "./pages/List";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./firebase";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Medicament from "./pages/Medicament";
import InfoDoctor from "./pages/infoDoctor";

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
              <Route exact path="/loginD" component={LoginD} />
              <Route exact path="/loginP" component={LoginP} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/patient" component={Patient} />
              <Route exact path="/doctor" component={Doctor} />
              <Route exact path="/list" component={List} />
              <Route exact path="/medicament" component={Medicament} />
              <Route exact path='/infodoctor' component={InfoDoctor} />
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
