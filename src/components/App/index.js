import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import User from '../User'
import PostHome from '../PostHome'

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={User}/>
        <Route path='/posts' component={PostHome}/>
      </Switch>
    )
  }
}


export default App