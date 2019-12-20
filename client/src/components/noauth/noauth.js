import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


class Noauth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  componentDidMount(){
  }

  render() {
    return (
      <div className="personal-container">
        <center><p>No Auth, Login to access the page</p></center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { }
)(Noauth);
