import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../Actions'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  handleInputEmail(event) {
    this.props.handleInputEmail(event.target.value)
  }
  handleInputPassword(event) {
    this.props.handleInputPassword(event.target.value)
  }
  loginUser(email, password) {
    this.props.loginUser(email, password, this.props.history)
  }
  render() {
    if(localStorage.getItem('token')){
      this.props.history.push('/posts')
    }
    return (
      <div>
        <p>
          Login!
        </p>
        <input type="text" value={this.props.auth.email} onChange={this.handleInputEmail.bind(this)}/>
        <input type="text" value={this.props.auth.password} onChange={this.handleInputPassword.bind(this)}/>
        <button onClick={this.loginUser.bind(this, this.props.auth.email, this.props.auth.password)}>create</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))