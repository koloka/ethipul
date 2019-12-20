import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './book.css';
import { getBook, delBook, editBook } from '../../actions/bookActions';


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: false,
      editmode: false,
      newtitle: '',
      newdes: '',
      newprice: '',
      newurl: ''
    };
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired,
  };

  componentDidMount(){
    this.props.getBook(this.props.match.params.id);
  }
  confirmDel = () => {
    this.setState({
      confirmed: true
    });
  }
  handleDel = () =>{
    this.props.delBook(this.props.match.params.id);
  }
  handleEdit = () => {
    const bookfromprops = this.props.book.book.find((book)=>book.id===parseInt(this.props.match.params.id));
    console.log(bookfromprops);
    this.setState(
      {
        editmode: true,
        newtitle: bookfromprops.title,
        newdes: bookfromprops.description,
        newprice: bookfromprops.price,
        newurl: bookfromprops.url_cover,
      }
    );
  }

  handleChangeEdit = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value});
  };
  handleSubmit(event) {
    var body = { 
      "title": this.state.newtitle, 
      "des": this.state.newdes,
      "price": this.state.newprice, 
      "url": this.state.newurl 
    };
    this.props.editBook(body, this.props.match.params.id);
    event.preventDefault();
  }

  render() {



    const deletebut = (
      <Fragment>
        <button className="d-block" onClick={this.confirmDel}>Delete</button>
        <button className={this.state.confirmed? 'd-block':'d-none'} onClick={this.handleDel}>Are You Sure?</button>
      </Fragment>
    );
    const editbut = (
      <Fragment>
        <button onClick={() => this.handleEdit()}>Edit</button>
      </Fragment>
    );
    const editboard = (
      <Fragment>
        {this.props.book.book.map(book=>
          <form onSubmit={this.handleSubmit} key={book.id} className={(this.state.editmode ^ this.props.book.updated)? 'd-block pt-2':'d-none'} >
            <div className="row">
              <div className="col-4 book-img-show">
                <img src={book.url_cover? book.url_cover:"http://actar.com/wp-content/uploads/2015/12/nocover.jpg"}/>
              </div>
              <div className="col-8">
                <div>
                  <p>Title</p>
                  <input name="newtitle" type="text" onChange={this.handleChangeEdit} value={this.state.newtitle}/>
                </div>
                <div>
                  <p>Description</p>
                  <textarea name="newdes" type="text" onChange={this.handleChangeEdit} value={this.state.newdes}/>
                </div>
                <div>
                  <p>Price</p>
                  <input name="newprice" type="number" onChange={this.handleChangeEdit} value={this.state.newprice}/>
                </div>
                <div>
                  <p>URL</p>
                  <input name="newurl" type="text" onChange={this.handleChangeEdit} value={this.state.newurl}/>
                </div>
                <div>
                  <input type="submit" value="Edit" />
                </div>
              </div>
            </div>
          </form>
        )}
      </Fragment>
    );
    let aboutBook;
    if (this.props.book.deleted | this.props.book.updated) {
      aboutBook = (
        <div className="alert alert-primary mt-5 text-center">
          <p>Book {this.props.book.deleted? 'Deleted':'Updated'}</p>
          <a href="/"><p>Go Home</p></a>
        </div>
      );
    } else if(!this.props.book.isbook){
      aboutBook = (
        <div className="alert alert-primary mt-5 text-center">
          <p>Book Not Found</p>
          <a href="/"><p>Go Home</p></a>
        </div>
      );
      // this should show both deleted and not found, 
      // but actually the case of deleted is assigned
      // so the else if block does not work
    }
    return (
      <div className="book-container">
        <div className="container">
          {this.props.book.book.map(book=>
            <div key={book.id} className={this.state.editmode? 'd-none':'d-block pt-2'}>
              <div className="row">
                <div className="col-4 book-img-show">
                  <img src={book.url_cover? book.url_cover:"http://actar.com/wp-content/uploads/2015/12/nocover.jpg"}/>
                </div>
                <div className="col-8">
                  <h1>{book.title}</h1>
                  <p>Price: ${book.price}</p>
                  <p>Description: {book.description}</p>
                  <p>Author: {book.description}</p>
                  <Fragment>
                    {this.props.auth.isAuthenticated? deletebut:''}
                    {this.props.auth.isAuthenticated? editbut:''}
                  </Fragment>
                </div>
              </div>
            </div>
          )}
          {editboard}
          {aboutBook}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  book: state.book,
});

export default connect(
  mapStateToProps,
  { getBook, delBook, editBook }
)(Books);
