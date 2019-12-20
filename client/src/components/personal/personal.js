import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './personal.css';
// import './scroll.js';


class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  componentDidMount(){
    window.addEventListener("scroll", function() {myFunction()}); 
    function myFunction(){
      var scroll = window.scrollY;
      if(scroll>0){
        document.getElementById("personal-navbar").style.background = "rgba(0, 255, 115, "+((scroll)/500)+")";
        document.getElementById("personal-logo").style.display = "none";
      }
      if(scroll<50){
        // document.getElementById("personal-navbar").style.background = "none";
        document.getElementById("personal-logo").style.display = "block";
      }
      if(scroll == 0){
        document.getElementById("personal-navbar").style.background = "none";
      }
    }
  }

  render() {
    return (
      <div className="personal-container personalc">
        <div className="personal-navbar" id="personal-navbar">
          <div className="personal-menu">
            <div className="personal-dropdown">
              <a href="">Home</a><i class="fas fa-sort-down"></i>
              <div className="personal-sub-menu">
                <p>SHOWsdfsdfsdfsdf</p>
                <p>SHOW</p>
                <p>SHOW</p>
              </div>
            </div>
            <div className="personal-dropdown">
              <a href="">Films</a><i class="fas fa-sort-down"></i>
              <div className="personal-sub-menu">
                <p>SHOW</p>
                <p>SHOW</p>
                <p>SHOW</p>
              </div>
            </div>
            <div>
              <a href="">Photos</a><i class="fas fa-sort-down"></i>
            </div>
            <div>
              <a href="">Web Design</a><i class="fas fa-sort-down"></i>
            </div>
            <div>
              <a href="">Contact</a><i class="fas fa-sort-down"></i>
            </div>
            <div className="personal-dropdown">
              <a href="">Home</a><i class="fas fa-sort-down"></i>
              <div className="personal-sub-menu">
                <p>SHOWsdfsdfsdfsdf</p>
                <p>SHOW</p>
                <p>SHOW</p>
              </div>
            </div>
          </div>
          <div>
            <p id="personal-logo">Logo</p>
          </div>
        </div>

        <div className="personal-profile-container pprofile">
          <div className="profile-margin">
            <h1>SAMBATH</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia modi inventore itaque voluptatem perferendis culpa ut voluptas minus non! Placeat minus dolore ipsa tenetur at odit delectus culpa voluptatum! Animi.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia modi inventore itaque voluptatem perferendis culpa ut voluptas minus non! Placeat minus dolore ipsa tenetur at odit delectus culpa voluptatum! Animi.
            </p>
          </div>
        </div>
        <div className="personal-aboutme-container">
          <div className="container personal-container">
            <div className="row">
              <div className="col-6">
                <img src="https://scontent.fpnh14-1.fna.fbcdn.net/v/t1.0-9/73539742_1870302906447133_8819675412025049088_o.jpg?_nc_cat=109&_nc_ohc=dHX-ft46OboAQkNNwvUEIUDly0eHdEdqOg3XWhi_b5GgOottd-N9iyKUg&_nc_ht=scontent.fpnh14-1.fna&oh=1f7fdb1c664f5d792632903a37e24bc4&oe=5E8A9478" />
              </div>
              <div className="col-6 aboutme-right">
                <div className="aboutme-content-right">
                  <h1>ABOUT ME</h1>
                  <p>Hello World! is the first world i see in the C++ console.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>.</p>
          </div>
          <div>
            <div className="container aboutme-3col">
              <div className="row">
                <div className="col-4">
                  <h1><i class="fas fa-film"></i></h1>
                  <p>Film</p>
                  <p className="p-des">I Film a movie. If you want to see let's see. I have Videos on my YouTube channel. Click!</p>
                </div>
                <div className="col-4">
                  <h1><i class="fas fa-camera"></i></h1>
                  <p>Photo</p>
                  <p className="p-des">I Film a movie. If you want to see let's see. I have Videos on my YouTube channel. Click!</p>
                </div>
                <div className="col-4">
                  <h1><i class="fas fa-laptop-code"></i></h1>
                  <p>Web Design</p>
                  <p className="p-des">I Film a movie. If you want to see let's see. I have Videos on my YouTube channel. Click!</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="m-0">.</p>
          </div>
        </div>

        <div className="personal-footer-container">
          <p>Footer</p>
        </div>
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
)(Personal);
