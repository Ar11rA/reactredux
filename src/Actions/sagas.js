import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export function* fetchUsers() {
  const result = yield (axios.get('http://localhost:9999/users'))
  yield put({type: 'USER_FETCH_SUCCESS', payload: result.data.Users})
}

export function* watchFetch() {
  yield takeEvery('USER_FETCH_SUCCESS_ASYNC', fetchUsers)
}

export function* insertUser(action) {
  console.log('3', action)
  const options = { username: action.payload }
  const response = yield axios.post('http://localhost:9999/users', options)
  yield put({type: 'USER_INSERT_SUCCESS', payload: response.data.Users})
  yield put({type: 'CHANGE_INPUT', payload: ''})
}

export function* watchInsert() {
  yield takeEvery('USER_INSERT_SUCCESS_ASYNC', insertUser)
}

export default function* rootSaga() {
  yield [
    watchFetch(),
    watchInsert()
  ]
}