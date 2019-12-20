import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

class Test extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.post;
    return (
      <div>
        {this.props.isAuthenticated ? 
        (
          <h1>
            Test Sambath login
          </h1>
        )
        : 
        (
          <h1>
            Test Sambath Logout
          </h1>
        )
        }


        {this.props.isAuthenticated ? (
          posts.map(post => {
            return <p>{post.title}</p>
          })
        ) : null}


        
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
)(Test);
