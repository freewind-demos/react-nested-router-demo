import React, {Component} from 'react';
import {Link} from 'react-router';

export default class DataPage extends Component {
	render() {
		return <div>
		<div>This is data page</div>
		<div><Link to='/edit-page'>to edit page</Link></div>
		</div>;
	}
}