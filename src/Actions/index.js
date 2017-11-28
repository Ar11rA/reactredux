// import axios from 'axios'
// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch({ type: 'USER_START' })
//     setTimeout(() => {
//       axios.get('http://localhost:9999/users').then((result) => {
//         dispatch({type: 'USER_FETCH_SUCCESS', payload: result.data.Users})
//       })}, 2000)
//   }
// }
// export const insertUser = (username) => {
//   return (dispatch) => {
//     axios.post('http://localhost:9999/users', {
//       username: username
//     })
//       .then(function (response) {
//         dispatch({type: 'USER_INSERT_SUCCESS', payload: response.data.Users})
//         dispatch({type: 'CHANGE_INPUT', payload: ''})
//       })
//   }
// }

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
  console.log('called')
  console.log(username)
  return {
    type: 'USER_INSERT_SUCCESS_ASYNC',
    payload: username
  }
}