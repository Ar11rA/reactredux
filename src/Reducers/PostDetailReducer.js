const INITIAL_STATE ={ 
  post: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'POST_DETAIL_FETCH_SUCCESS':
    return {...state, post: action.payload, loading: false}
  case 'POST_DETAIL_START':
    return {...state, loading: true}
  default:
    return state
  }
}