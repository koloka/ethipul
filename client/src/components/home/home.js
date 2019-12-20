import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Books from '../books/books';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="home-container">
        <div className="container">
          <center><h1>ETHIPUL BOOK</h1></center>
          <Books />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Home);
