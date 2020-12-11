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
import CreateProfilePage from './pages/Profile/CreateProfilePage';
import EditProfilePage from './pages/Profile/EditProfilePage';
import { fetchProfile } from './actions/userActions';
import { PrivateRoute } from './containers/PrivateRoute';
import { ForceNotAuthRoute } from './containers/ForceNotAuthRoute';
import { NewProfileRoute } from './containers/NewProfileRoute'

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.userReducer.token)

  useEffect(() => {
    if (token) dispatch(fetchProfile(token))
  })

  return (
    <div>
      <Router>
        <Switch>
          <NewProfileRoute path="/profile/new">
            <CreateProfilePage />
          </NewProfileRoute>
          <PrivateRoute path="/profile/edit">
            <EditProfilePage />
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