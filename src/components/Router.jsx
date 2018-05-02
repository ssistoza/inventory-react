import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App.jsx';
import StorePicker from './StorePicker.jsx';
import NotFound from './NotFound.jsx'

/**
 * This is a router using React Router.
 * Note: React Router itself is a component.
 * 
 * 
 * 
 * 
 */

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={StorePicker} />
			<Route path="/store/:storeId" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;