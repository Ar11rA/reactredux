const INITIAL_STATE ={ 
  posts: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'POST_FETCH_SUCCESS':
    return {...state, posts: action.payload, loading: false}
  case 'POST_START':
    return {...state, loading: true}
  default:
    return state
  }
}