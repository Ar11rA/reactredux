import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../Actions'

class Post extends Component {
  
  componentWillMount() {
    console.log(this.props.auth)
    this.props.fetchAllPosts(this.props.auth.token)
  }

  renderPostList() {
    return this.props.postsDb.posts.map((post) => <li> <Link to={`/posts/${post.id}`}> {post.title} </Link></li>)
  }

  render() {
    return (
      <div>
        <p>
          Posts!
        </p>
        <ul>
          {this.renderPostList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postsDb: state.postsDb,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)