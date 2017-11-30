export const handleInput = (text) => {
  return {
    type: 'CHANGE_INPUT',
    payload: text
  }
}

export const fetchAllUsers = () => {
  return {
    type: 'USER_FETCH_SUCCESS_ASYNC'
  }
}

export const insertUser = (username) => {
  return {
    type: 'USER_INSERT_SUCCESS_ASYNC',
    payload: username
  }
}

export const fetchAllPosts = () => {
  return {
    type: 'POST_FETCH_SUCCESS_ASYNC'
  }
}

export const fetchOnePost = (id) => {
  return {
    type: 'POST_ONE_FETCH_SUCCESS_ASYNC',
    payload: id
  }
}
