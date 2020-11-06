import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/registro">
            <SignupPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;