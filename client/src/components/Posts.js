import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import PropTypes from 'prop-types';
import '../App.css';
class Posts extends Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
          <p>hello</p>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
