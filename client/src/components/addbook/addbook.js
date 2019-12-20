import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addBook } from '../../actions/bookActions';

class AddBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      des: '',
      price: '',
      url: '',
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  static propTypes = {
    auth: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired,
  };

  componentDidMount(){
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value});
  };

  handleSubmit(event) {
    var body = { 
      "title": this.state.title, 
      "des": this.state.des,
      "price": this.state.price, 
      "url": this.state.url 
    };
    this.props.addBook(body);
    event.preventDefault();
  }
  
  
  render() {
    let ifBookAdded;
    if(this.props.book.isbook_add){
      ifBookAdded = (
        <div className="alert alert-primary mt-5 text-center">
          <p>Book Added</p>
          <a href="/dashboard">Go To DashBoard</a>
        </div>
      );
    }
    return (
      <div className="add-book">
        <form onSubmit={this.handleSubmit} className={this.props.book.isbook_add? 'd-none':'d-block'}>
          <div className="text-input">
            <h3>Title</h3>
            <input name="title" value={this.state.title} onChange={this.handleChange} type="text"/>
          </div>
          <div className="textarea-input">
            <h3>Description</h3>
            <textarea name="des" value={this.state.des} onChange={this.handleChange} />
          </div>
          <div className="num-input">
            <h3>Price</h3>
            <input name="price" value={this.state.price} onChange={this.handleChange} type="number"/>
          </div>
          <div className="text-input">
            <h3>URL</h3>
            <input name="url" value={this.state.url} onChange={this.handleChange} type="text"/>
          </div>
          <input value="submit" type="submit" />
        </form>
        {ifBookAdded}
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
  { addBook }
)(AddBook);
