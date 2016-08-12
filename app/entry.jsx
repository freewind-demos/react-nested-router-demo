import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import App from './app.jsx';
import EditPage from './edit-page/index.jsx';
import Editor from './edit-page/editor.jsx';
import Previewer from './edit-page/previewer.jsx';
import DataPage from './data-page/index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const router = <Router history={hashHistory}>
  <Route path='/' component={App}>
  	<IndexRedirect to='edit-page' />
  	<Route path='edit-page' component={EditPage}>
  	  <IndexRedirect to='editor' />
  		<Route path='editor' component={Editor} />
  		<Route path='previewer' component={Previewer} />
  	</Route>
  	<Route path='data-page' component={DataPage} />
  </Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById('content')
);
