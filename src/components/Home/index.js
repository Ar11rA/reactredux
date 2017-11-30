import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
          </ul>
        </nav>
        <p>
      Home Page
        </p>
      </div>
    )
  }
}

export default Home