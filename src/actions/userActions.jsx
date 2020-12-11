import axios from 'axios'
import Cookies from 'js-cookie'

// Action Creators

const setToken = (payload) => ({type: "SET_TOKEN", payload})
const setProfile = (payload) => ({type: "SET_PROFILE", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

// Methods

export const logUserIn = (data) => (dispatch) => {
  axios.post('http://localhost:3001/user_token', {
    auth: {
      'email': data.email,
      'password': data.password
    }
  })
  .then(response => {
    console.log('login response:', response)
    Cookies.set('token', response.data.jwt, { expires: 7 })
    dispatch(setToken(response.data.jwt))
  })
}

export const fetchProfile = (token) => (dispatch) => {
  axios.get('http://localhost:3001/profile/data', {
    headers: {
      'Authorization': "Bearer " + token
    }
  })
  .then(response => {
    console.log(response)
    dispatch(setProfile(response.data.profile))
  }).catch(err => {
    dispatch(setToken(null))
    Cookies.remove('token')
    console.log(err)
  })
}