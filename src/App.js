import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./pages/Login";
import LoginUser from "./pages/LoginUser";
import Forgotten from "./pages/ForgottenPassword";
import Panel from "./pages/Panel";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/forgotten">
              <Forgotten />
          </Route>

          <Route path="/user-login">
              <LoginUser />s
          </Route>

          <Route path="/panel">
              <Panel />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
