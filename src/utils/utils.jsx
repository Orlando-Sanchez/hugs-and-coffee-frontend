import store from '../index.js';

export const handleCreateMyProfileClick = () => {
  const state = store.getState()
  const token = state.userReducer.token
  const profile = state.userReducer.profile

  if (token === null) {
    return '/registro'
  }
  else {
    if (profile === null) {
      return '/profile/new'
    }
    else {
      return '/profile/edit'
    }
  }
}