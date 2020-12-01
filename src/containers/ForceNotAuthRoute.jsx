import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function ForceNotAuthRoute({ children }) {
  let token = useSelector(state => state.userReducer.token)
  return (
    <Route
      render={({ location }) =>
        token ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        ) :
        (
          children
        )
      }
    />
  );
}