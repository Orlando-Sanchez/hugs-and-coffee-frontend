const defaultState = {
  loggedIn: false,
  token: '',
  profile: {
    fullname: '',
    occupation: '',
    biography:'',
    coffee_price: '',
    currency_sign: '',
    is_published: '',
    id: ''
  }
}

const userReducer = (state = defaultState, action) => {
  switch(action.type){
      case "SET_TOKEN":
          return {
              ...state,
              token: action.payload,
              loggedIn: true,
          }
      case "SET_PROFILE":
          return {
              ...state,
              profile: {
                ...state.profile,
                fullname: action.payload.fullname,
                occupation: action.payload.occupation,
                biography:action.payload.biography,
                coffee_price: action.payload.coffee_price,
                currency_sign: action.payload.currency_sign,
                is_published: action.payload.is_published,
                id: action.payload.id
              }
          }
      case "LOG_OUT":
          // localStorage.clear()
          return {
              loggedIn: false,
              user: {}
          }
      default: return state
  }
}

export default userReducer