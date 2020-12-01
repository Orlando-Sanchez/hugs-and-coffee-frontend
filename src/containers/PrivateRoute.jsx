import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function PrivateRoute({ children }) {
  let token = useSelector(state => state.userReducer.token)
  return (
    <Route
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}