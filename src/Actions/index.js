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