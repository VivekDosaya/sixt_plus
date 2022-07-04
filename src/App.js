import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "pages/landingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <LandingPage />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
