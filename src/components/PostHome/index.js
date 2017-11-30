import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Post from '../Post'
import PostDetail from '../PostDetail'

class PostHome extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/posts' component={Post}/>
        <Route path='/posts/:id' component={PostDetail}/>
      </Switch>
    )
  }
}

export default PostHome