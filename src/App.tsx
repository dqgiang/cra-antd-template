import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/dashboard.component';
import { createBrowserHistory } from 'history';
import { Button } from 'antd';
export const history = createBrowserHistory();

const Home: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello there</p>
    </header>
  </div>
);

function App(): JSX.Element {
  return (
    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app-1/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/app-1">
            <Dashboard>
              <Switch>
                <Route path="/dashboard">
                  <Button type="primary">Click me</Button>
                </Route>
                <Route path="app-2">
                  <div>This is app-2 page</div>
                </Route>
              </Switch>
            </Dashboard>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
