import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';


class Footer extends Component {
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
      <footer className="footer-container">
        <div className="footer-stripe-top">
        </div>
        <div className="social-logo-container">
          <div className="logo-carrier">
            <div className="footer-icon-hold">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-google"></i>
            </div>
            <div>
              <p className="footer-ethipul">
                ETHIPUL BOOK
              </p>
            </div>
          </div>
        </div>
        <div className="footer-decide-padding">
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-6">
                  <h1>About ETHIPUL</h1>
                  <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Pricing</a></li>
                  </ul>
                </div>
                <div className="col-6">
                  <h1>Products</h1>
                  <ul>
                    <li><a href="">Books</a></li>
                    <li><a href="">AudioBooks</a></li>
                    <li><a href="">eBooks</a></li>
                    <li><a href="">UsedBooks</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-5">
              <h1>Subscribe</h1>
              <input type="text" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { }
)(Footer);
