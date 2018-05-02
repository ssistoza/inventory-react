import React from 'react'; 
// import { Component } from 'react'; // Possible but not used this way.

import { render } from 'react-dom';
import Router from './components/Router.jsx';

import './css/style.css';


/**
 * This render method allows us to place the component into the div#main.
 */
render(<Router />, document.querySelector('#main'));
