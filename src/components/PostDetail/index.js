import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../Actions'

class PostDetail extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const id = this.props.match.params.id
    console.log(this.props)
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