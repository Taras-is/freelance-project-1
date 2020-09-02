import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
