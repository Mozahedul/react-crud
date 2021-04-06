import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      className="App"
      style={{ maxWidth: "500px", minWidth: "300px", margin: "30px auto" }}
    >
      <Router>
        <Switch>
          <Route path="/add">
            <AddUser />
          </Route>
          <Route path="/edit/:id">
            <EditUser />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
