import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import ReadUser from "./components/ReadUser";
import { useStateValue } from "./context/GlobalState";

function App() {
  const [{ todoList }, dispatch] = useStateValue();

  useEffect(() => {
    const responseData = localStorage.getItem("todoItem");
    const data = JSON.parse(responseData);
    console.log(data);
    if (data) {
      data.map((item) =>
        dispatch({
          type: "ADD_TODO",
          item: item,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    const jsonData = JSON.stringify(todoList);
    localStorage.setItem("todoItem", jsonData);
  }, [todoList]);

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
          <Route path="/read/:id">
            <ReadUser />
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
