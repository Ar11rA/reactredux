import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import UserReducerDb from './UserReducerDb'
import UserFormReducer from './UserFormReducer'
import PostReducer from './PostReducer'
import PostDetailReducer from './PostDetailReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
  users: UserReducer,
  usersDb: UserReducerDb,
  form: UserFormReducer,
  postsDb: PostReducer,
  postDetail: PostDetailReducer,
  auth: AuthReducer
})