import React, {Component} from 'react';
import {Link} from 'react-router';

export default class EditPage extends Component {
  render() {
    return <div>
      <div>
      	<Link to='/edit-page/editor'>Edit</Link>
      	-
      	<Link to='/edit-page/previewer'>Preview</Link>
      </div>
      <div>{this.props.children}</div>
    </div>;
  }
}