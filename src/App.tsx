import React from 'react';
import Privacy from './Privacy'
import Support from './Support'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Welcome
          <p>
            from: Dominic Scimeca
          </p>
          <p>
            to: You
          </p>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </nav>
          <Switch>
              <Route path="/privacy">
                <Privacy />
              </Route>
              <Route path="/support">
                <Support />
              </Route>
              <Route path="/"></Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
