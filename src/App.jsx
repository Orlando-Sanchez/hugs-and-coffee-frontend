import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
// import ProfilePage from './pages/Profile/ProfilePage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/registro">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          {/* <Route path="/profile/new">
            <ProfilePage />
          </Route> */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;