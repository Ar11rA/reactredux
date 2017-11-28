import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../Actions'

class App extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }
  handleInput(event) {
    this.props.handleInput(event.target.value)
  }
  insertUser(username) {
    this.props.insertUser(username)
  }
  renderUsers(users) {
    return users.length ? users.map(user => <p style={styles.textStyles} key={user.id}>{user.username}</p>) : <p>No data to display!</p>
  }
  renderLoading() {
    return (
      <p> Loading </p>
    )
  }
  renderHome(users) {
    return (
      <div style={styles.divStyles}> 
        {this.renderUsers(users)}
        <div style={styles.containerStyles}>
          <input style={styles.inputStyles} type="text" value={this.props.form.username} onChange={this.handleInput.bind(this)}/>
          <button style={styles.buttonStyles} onClick={ () =>  this.insertUser.bind(this, this.props.form.username)}>create</button>
        </div>
      </div>
    )
  }
  render() {
    const users = this.props.usersDb.users
    const loading = this.props.usersDb.loading
    return loading ? this.renderLoading() : this.renderHome(users)
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.users,
    usersDb: state.usersDb,
    form: state.form
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = {
  divStyles: {
    border: '1px solid #000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 50,
    alignItems: 'center',
    margin: 50
  },
  inputStyles: {
    border: '1px solid #000',
    borderRadius: 10,
    flex: 2,
    outline: 'none',
    padding: 2,
    height: 20,
    margin: 20
  },
  textStyles: {
    fontSize: 14
  },
  buttonStyles: {
    background: 'rgba(0,0,0,0.8)',
    borderRadius: 10,
    color: 'white',
    flex: 1,
    outline: 'none',
    margin: 20
  },
  containerStyles:{
    display: 'flex',
    flexDirection: 'row'
  }
}