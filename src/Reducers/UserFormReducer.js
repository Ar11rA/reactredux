const INITIAL_STATE = {
  username: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'CHANGE_INPUT':
    return {...state, username: action.payload}
  default:
    return state 
  }
}