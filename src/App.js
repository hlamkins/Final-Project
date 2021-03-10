import logo from "./logo.svg";
import "./style/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Save from "./pages/Save";
import { getAnimals } from "./utils/API";

function App() {
  getAnimals();
  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/save">
            <Save />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
