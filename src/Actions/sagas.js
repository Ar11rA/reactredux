import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export function* fetchUsers() {
  yield put({ type: 'USER_START' })
  const result = yield (axios.get('http://localhost:9999/users'))
  yield put({type: 'USER_FETCH_SUCCESS', payload: result.data.Users})
}

export function* watchFetchUsers() {
  yield takeEvery('USER_FETCH_SUCCESS_ASYNC', fetchUsers)
}

export function* insertUser(action) {
  const options = { username: action.payload }
  const response = yield axios.post('http://localhost:9999/users', options)
  yield put({type: 'USER_INSERT_SUCCESS', payload: response.data.Users})
  yield put({type: 'CHANGE_INPUT', payload: ''})
}

export function* watchInsertUsers() {
  yield takeEvery('USER_INSERT_SUCCESS_ASYNC', insertUser)
}

export function* fetchPosts(action) {
  yield put({ type: 'POST_START' })
  const response = yield call (axios.get,'http://localhost:9999/posts')
  yield put({type: 'POST_FETCH_SUCCESS', payload: response.data.Posts}) 
}

export function* watchFetchPosts() {
  yield takeEvery('POST_FETCH_SUCCESS_ASYNC', fetchPosts)
}

export function* fetchPost(action) {
  yield put({ type: 'POST_DETAIL_START' })
  const response = yield (axios.get(`http://localhost:9999/posts/${action.payload}`))
  yield put({type: 'POST_DETAIL_FETCH_SUCCESS', payload: response.data.Post}) 
}

export function* watchFetchPost() {
  yield takeEvery('POST_ONE_FETCH_SUCCESS_ASYNC', fetchPost)
}

export default function* rootSaga() {
  yield [
    watchFetchUsers(),
    watchInsertUsers(),
    watchFetchPosts(),
    watchFetchPost()
  ]
}