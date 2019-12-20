import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css';
import { getBooks } from '../../actions/booksActions';
// import axios from 'axios';

class Books extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    books: PropTypes.object.isRequired
  };

  componentDidMount(){
    this.props.getBooks();
  }

  render() {
    return (
      <div className="books-container">
          <div className="row">
            {this.props.books.books.map(book=>
              <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-2 book-home" key={book.id}>
                <div className="book-shadow">
                  <img src={book.url_cover? book.url_cover:"http://actar.com/wp-content/uploads/2015/12/nocover.jpg"}/>
                  <h1>{book.title}</h1>
                  <a href={`/${book.id}`} className="btn btn-primary">See More Details</a>
                </div>
              </div>
            )}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  books: state.books
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Books);
