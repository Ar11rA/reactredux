import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import PostHome from '../PostHome'

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/posts' component={PostHome}/>
      </Switch>
    )
  }
}


export default App