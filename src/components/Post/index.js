import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../Actions'
class Post extends Component {

  componentWillMount() {
    this.props.fetchAllPosts()
  }

  renderPostList() {
    return this.props.postsDb.posts.map((post, index) => <li key={index}> <Link to={`/posts/${post.id}`}> {post.title} </Link></li>)
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
    postsDb: state.postsDb
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)