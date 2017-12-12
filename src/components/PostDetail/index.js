import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../Actions'

class PostDetail extends Component {
  componentWillMount() {
    const id = this.props.match.params.id
    this.props.fetchOnePost(id)
  }
  renderPost() {
    const post = this.props.postDetail.post
    return (
      <div>
        <p> {post.title} </p>
        <p> {post.categories} </p>
        <p> {post.content} </p>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderPost()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    postDetail: state.postDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)