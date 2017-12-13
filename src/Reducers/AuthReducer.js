const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  loggedIn: false,
  token: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'CHANGE_INPUT_EMAIL':
    return {...state, email: action.payload}
  case 'CHANGE_INPUT_PASSWORD':
    return {...state, password: action.payload}
  case 'LOGIN_SUCCESS':
    return {...state,  loggedIn: true, loading: false, token: action.payload}
  case 'LOGIN_START':
    return {...state, loading: true, loggedIn: false}
  default:
    return state 
  }
}