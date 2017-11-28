const INITIAL_STATE ={ 
  users: [],
  loading: false}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'USER_FETCH_SUCCESS':
    return {...state, users: action.payload, loading: false}
  case 'USER_INSERT_SUCCESS':
    return {...state, users: [...state.users,action.payload] }
  case 'USER_START':
    return {...state, loading: true}
  default:
    return state 
  }
}