import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Home from './components/home/home';
import Book from './components/book/book';
import Personal from './components/personal/personal';
import Footer from './components/footer/footer';
import Dashboard from './components/dashboard/dashboard';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

class App extends Component {
  
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>

        <Router>
          <Switch>
            <Route exact path="/sambath">
            </Route>
            <Route path="/">
              <AppNavbar />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sambath" component={Personal} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/:id" component={Book} />
          </Switch>

          <Switch>
            <Route exact path="/sambath">

            </Route>
            <Route path="/">
              <Footer />
            </Route>
          </Switch>

        </Router>

      </Provider>
    );
  }
}

export default App;
