import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Sass</a></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">JavaScript</a></li>
      </ul>
    </div>
  </nav>
    )
  }

}