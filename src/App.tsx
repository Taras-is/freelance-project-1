import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import "semantic-ui-css/semantic.min.css";
import SignUp from "./pages/SighnUp/SignUp";
import SignUpLeft from "./pages/SighnUp/SignUpLeft";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <Switch>
<SignUp/>
        </Switch>
          <Footer/>
      </Router>

    </div>
  );
}

export default App;
