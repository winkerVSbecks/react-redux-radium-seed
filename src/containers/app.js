import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import css from '../app.css';
import Main from '../components/main';

class App extends Component {

  render() {

    return (
      <div>
        <Main { ...this.props } />
      </div>
    );

  }

};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect((state) => state, mapDispatchToProps)(App);
