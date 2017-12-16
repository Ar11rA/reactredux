export const handleInput = (text) => {
  return {
    type: 'CHANGE_INPUT',
    payload: text
  }
}

export const handleInputEmail = (text) => {
  return {
    type: 'CHANGE_INPUT_EMAIL',
    payload: text
  }
}
export const handleInputPassword = (text) => {
  return {
    type: 'CHANGE_INPUT_PASSWORD',
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

export const loginUser = (email, password, history) => {
  return {
    type: 'LOGIN_USER_ASYNC',
    payload: { email, password, history }
  }
}
export const fetchAllPosts = (token) => {
  return {
    type: 'POST_FETCH_SUCCESS_ASYNC',
    payload: token
  }
}

export const fetchOnePost = (id) => {
  return {
    type: 'POST_ONE_FETCH_SUCCESS_ASYNC',
    payload: id
  }
}
