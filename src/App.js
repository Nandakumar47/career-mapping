import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Home/HomePage";
import NavBar from "./components/Navbar/NavBar";
import BiologyScience from "./components/PlusTwo/BiologyScience/BiologyScience";
import ComputerScience from "./components/PlusTwo/ComputerScience/ComputerScience";
import Commerce from "./components/PlusTwo/Commerce/Commerce";
import Humanities from "./components/PlusTwo/Humanities/Humanities";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/BiologyScience" exact>
            <BiologyScience />
          </Route>
          <Route path="/ComputerScience" exact>
            <ComputerScience />
          </Route>
          <Route path="/Commerce" exact>
            <Commerce />
          </Route>
          <Route path="/Humanities" exact>
            <Humanities />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
