import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Footer from './footer'
import Home from './components/Home'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const rootE = document.getElementById("root")

const render = ()=> ReactDOM.render(
	<div>
		<Router history = { browserHistory }>
	    <Route path="/" component={ Footer }>
	    	<IndexRoute component={ Home }/>
	    </Route>
	  </Router>
	</div>,
	rootE
);
registerServiceWorker();

render()