import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function NewProfileRoute({ children }) {
  let token = useSelector(state => state.userReducer.token)
  let profile = useSelector(state => state.userReducer.profile)

  return (
    <Route
      render={({ location }) =>
        token === null ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
        ) : (
        profile === null ? 
        children
        :
        <Redirect
          to={{
            pathname: "/profile/edit",
            state: { from: location }
          }}
        />        
        )
      }
    />
  );
}