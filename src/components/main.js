import React, { Component } from 'react';
import Radium, { styles } from 'radium';
import * as Styles from '../styles/main-styles';

/**
 * Main Component
 */
@Radium
export default class Main extends Component {

  render() {

    return (
      <div>
        <header style={ Styles.header }>

          <nav style={ Styles.nav }>

            <div style={ Styles.linksWrapper }>
              <a href="/" ref="0" style={ Styles.btn }>Home</a>
              <a href="/" ref="1" style={ Styles.btn }>Burgers</a>
              <a href="/" ref="2" style={ Styles.btn }>Fries</a>
            </div>

            <div style={ Styles.smColRight }>
              <a href="/" ref="3" style={ Styles.btn }>About</a>
            </div>

          </nav>

          <div style={ Styles.body }>

            <h1 style={[
              Styles.h1,
              Styles.heading
            ]}>
              Hamburgers
            </h1>

            <p style={ Styles.h3 }>
              Artisinal ground chuck creations
            </p>

            <a href="#" style={[
              Styles.btn,
              Styles.btnPrimary,
              Styles.h3
            ]}>Pancake</a>

          </div>

        </header>
      </div>
    );

  }

}
