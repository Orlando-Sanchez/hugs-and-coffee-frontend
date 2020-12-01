import React, { useEffect } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/Profile/ProfilePage'
import ManageProfilePage from './pages/Profile/ManageProfilePage';
import { fetchProfile } from './actions/userActions';
import { PrivateRoute } from './containers/PrivateRoute';
import { ForceNotAuthRoute } from './containers/ForceNotAuthRoute';

const App = () => {

  const dispatch = useDispatch();
  const token = useSelector(state => state.userReducer.token)

  useEffect(() => {
    console.log('from app, token:', token)
    if (token) dispatch(fetchProfile(token))
  })

  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute path="/profile/edit">
            <ManageProfilePage />
          </PrivateRoute>
          <ForceNotAuthRoute path="/registro">
            <SignupPage />
          </ForceNotAuthRoute>
          <ForceNotAuthRoute path="/login">
            <LoginPage />
          </ForceNotAuthRoute>
          <Route path="/profile/new">
            <ProfilePage />
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