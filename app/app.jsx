import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return <div>
      <div>
      	<Link to='/edit-page'>Edit Page</Link>
      	-
      	<Link to='/data-page'>Data Page</Link>
      </div>
      <div>{this.props.children}</div>
    </div>;
  }
}