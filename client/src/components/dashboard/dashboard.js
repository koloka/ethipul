import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setBoard } from '../../actions/dashboardActions';
import AddBook from '../addbook/addbook';
import Books from '../books/books';
import Noauth from '../noauth/noauth';
import './dashboard.css';
class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  componentDidMount(){
    this.props.setBoard("show_book");
  }

  render() {
    if(!this.props.auth.isAuthenticated)
      return(<Noauth/>);
    return (
      <div className="dashboard-container">
        <div className="container">
          <div className="row">
            <div className="dash-side col-12 col-sm-2">
              <div className="dash-side-shadow">

                <div className="dash-list">
                  <p className={this.props.board.add_book? 'dash-active':''} onClick={() => this.props.setBoard("add_book")}>Add More Books</p>
                  <p className={this.props.board.show_book? 'dash-active':''} onClick={() => this.props.setBoard("show_book")}>Show Book</p>
                </div>

              </div>
            </div>

            <div className="dash-board col-12 col-sm-10">
              <div className="dash-board-shadow">
                <div className={this.props.board.add_book? 'd-block':'d-none'}>
                  <AddBook />
                </div>
                <div className={this.props.board.show_book? 'd-block':'d-none'}>
                  <Books />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  board: state.dashboard.board
});

export default connect(
  mapStateToProps,
  { setBoard }
)(Dashboard);
