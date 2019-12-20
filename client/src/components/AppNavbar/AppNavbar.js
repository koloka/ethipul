import React, { Component, Fragment } from 'react';
import { NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../auth/LoginModal';
import Logout from '../auth/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppNavbar.css';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.username}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );
    return (
      <div className="nav-bar">
        <div className="devider">
          <div className="logo">
            <a href="/">
              <img src="https://i.imgur.com/Sz9dZse.png" alt="img"/>
            </a>
          </div>
          <div className="menu-container">
            <ul>
              <li><a href="https://www.google.com/">Books</a></li>
              <li><a href="https://www.google.com/">Audiobooks</a></li>
              <li><a href="https://www.google.com/">Usedbook</a></li>
              <li><a href="https://www.google.com/">ReadBlog</a></li>
            </ul>
            
            <p>{user ? `Welcome ${user.username}` : ''}</p>
          </div>
          <div className="authentication">
            <ul>
              {user ? authLinks:guestLinks }
            </ul>
          </div>
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
)(AppNavbar);
