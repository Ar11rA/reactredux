import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import UserReducerDb from './UserReducerDb'
import UserFormReducer from './UserFormReducer'


export default combineReducers({
  users: UserReducer,
  usersDb: UserReducerDb,
  form: UserFormReducer
})