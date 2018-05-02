import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	static propTypes = {
		history: PropTypes.object
	}

	myInput = React.createRef();

	/**
	 * A method that will run before the component is created.
	 * 
	 * All built-in methods of the React component have reference to {this}.
	 * - All other methods added on are not bound by default. 
  	 * - No Reference to its own component even if part of component.
     * - the {this} in goToStore is undefined.
	 * 
	 * 2 ways of binding the {this} in a custom method.
	 * - Use the constructor to bind this method. 
	 * 
	 * constructor() {
	 * 	super();
	 * 	this.goToStore = this.goToStore.bind(this);
	 * }
	 * 
	 * goToStore(event) {
	 * 	event.preventDefault();
	 * 	console.log(this);
	 * }
	 * 
	 * - Define your custom method as a property. See below.
	 *   - via Arrow Syntax.
	 */

	/**
	 * 1. Stop the form from submitting.
	 * 2. Get the text from the input.
	 * 3. Change the page to /store/whatever-they entered
	 *    - window.location refreshes the page.
	 *    - Use push-state to change the url without refreshing the page using react router.
	 *      - This component has access to react router because it is a child.
	 */
	goToStore = (event) => {
		event.preventDefault(); 
		const storeName = this.myInput.value.value;
		this.props.history.push(`/store/${storeName}`);
	}
	
	/**
	 * The render method, most important method.
	 *  - What HTML or DOM Element to output to the page.
	 *  - Can only return <b>ONE</b> Element.
	 *    - No sibling elements. However you can return more elements inside the single element.
	 *      - <p>Sibling 1</p><p>Sibling 2</p> WRONG
	 *      - <div><p>Sibling 1</p><p>Sibling 2</p></div> CORRECT
	 *	  - You may return adjacent elements using the React.Fragment tag.
	 *	    - <React.Fragment><p>Fish</p><form></form></React.Fragment>
	 * Alternative:
	 *   return React.createElement('p', {className: 'hey'}, 'Hello, World');
	 *    - Not Using JSX. JSX is not required to build React Applications.
	 *    - Maybe required to nest your createElement inside of each other.
	 *   return `<p>${varName"</p>`
	 *    - Using ES6.
	 *    
	 *  Important Things to Note:
	 *   Never touch the DOM expecially in React.
	 *   - 
	 *  
	 *   In order to add a class to a tag use className attribute instead of class.
	 *    - <p class="test"></p> WRONG 
	 *    - <p className="test"</p> CORRECT
	 *   JSX 
	 *    - No HTML comments. Must use Curly Brace and JS comment block.
	 *    - Using a curly brace tells React to return into JS.
	 *    - No way to loop, use JS.
	 *    
	 *    value vs defaultValue
	 *    - A value prop of input tage must attached to state.
	 *    - Use defaultValue for default text.
	 *    
	 */
	render() {
		return (
			<form className="store-selector" onSubmit={ this.goToStore } >
				<h2>Please enter a Store</h2>
				<input 
					type="text" 
					ref={this.myInput}
					required 
					placeholder="Store Name" 
					defaultValue={ getFunName() } 
				/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}	
}

export default StorePicker;
