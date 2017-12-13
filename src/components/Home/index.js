import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BackgroungImage from '../../Assets/bg1.jpg'
class Home extends Component {
  render() {
    const { containerStyle, navbarStyle, ulStyle, liStyle, linkStyle, contentStyle } = styles
    return (
      <div style={containerStyle}>
        <nav style={navbarStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}><Link style={linkStyle} to='/'>Home</Link></li>
            <li style={liStyle}><Link style={linkStyle} to='/login'>Login</Link></li>
            <li style={liStyle}><Link style={linkStyle} to='/posts'>Posts</Link></li>
          </ul>
        </nav>
        <p style={contentStyle}>
          Learn React 16 alongside Redux with react router v4 
        </p>
      </div>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundImage: `url(${BackgroungImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: window.innerHeight,
  },
  navbarStyle: {
    backgroundColor: '#000',
    width: '100%'
  },
  ulStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    height: window.innerHeight * 0.045,
    paddingRight: 20,
    margin: 0
  },
  liStyle: {
    display: 'block',
    flex: 0,
    alignSelf: 'center',
    listStyleType: 'none',
    marginLeft: 10,
    marginRight: 10
  },
  linkStyle: {
    fontFamily: 'Marker Felt, fantasy',
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px'
  },
  contentStyle: {
    display: 'flex',
    height: window.innerHeight * 0.9,
    width: window.innerWidth,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35,
    color: '#fff',
    fontFamily: 'Marker Felt, fantasy'
  }
}

export default Home