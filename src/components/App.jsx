import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.jsx';
import Order from './Order.jsx';
import Inventory from './Inventory.jsx';
import Fish from './Fish.jsx';

import sampleFishes from '../sample-fishes';
import base from '../base';

/**
 * Start of applicaiton.
 *
 * @class      App Order menu application.
 * 
 * Notes:
 * 
 * State
 * - Where the data lives and its home.
 * - What is it? 
 *    It an object that lives inside of a component.
 *    Holds data that itself needs and its children.
 * - React will react to the changes of the state and will automatically update the page.
 * - States can be passed down through the children but not passed up.
 * - Creating and initializing (empty) a state, 2 ways.
 *    by Constructor
 *    constructor() {
 *    	super();
 *    	this.state = {
 *    		...
 *    	}
 *    }
 * 
 *    by Property  
 *    state = {
 *     fishes: {}.
 *     order: {},
 *    }
 * 
 
 *   
 * Props (Attributes of a tag)
 *  - The provide more information to the tag.
 *  - The way we get data into a component. 
 *  - If you wwdanna pass anything other than a sting, a curly brace is required.
 *     Example:
 *      <Header tagline="Cool" age={500} cool={true} />
 *      
 * React Lifecycle Hooks
 *  Mounting { constructor(), componentWillMount(), render(), componentDidMount() }
 *  Updating { ... }
 *  Unmounting { ... }
 *  Error handling { ... } 
 */
class App extends React.Component {
	static propTypes = {
		match: PropTypes.object,
	}

	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;

		// reinstate localStorage
		const localStorageRef = localStorage.getItem(params.storeId);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}

		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	}

	componentDidUpdate() {
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}


	/**
	 * States Continued.
	 *
	 * How do get an item into state?
	 *   The methods that update state and state live in the exact same component.
	 *   - How to call the method from a child component?
	 *      by props. 
	 *      <Inventory addFish={this.addFish} />
	 *      
	 * How do you update the state.
	 *  - Never directly mutate the state. Always change by immutability.
	 *  - Notice you will only update the piece of the state.
	 *  
	 *  JS ways to copy
	 *   - Using Spread: {... this.state.fishes}
	 *   - Deep Copy: duplicate every object (copy and original will not share).
	 *   
	 *  1. Take a copy of the existing state.
	 *  2. Add new item into object.
	 *  3. Set the new object to states.
	 */
	addFish = fish => {
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish;
		this.setState({
			fishes     // new to ES6 (old way => fishes: fishes)
		});
	}

	/**
	 * Update the fish state.
	 * 1. Take a copy of the current state.
	 * 2. Update that state.
	 * 3. Set that to state.
	 * 
	 * @param      {<type>}  key          The unique key of fish
	 * @param      {<type>}  updatedFish  The updated fish
	 * 
	 */
	updateFish = (key, updatedFish) => {
		const fishes = { ...this.state.fishes };
		fishes[key] = updatedFish;
		this.setState({ fishes });
	}

	/**
	 * Delete the fish from state.
	 * 1. Take a copy of the current the state.
	 * 2. Update that state.
	 * 	  - Set that to null so it recognized by Firebase.
	 * 3. Set that to state.
	 *    
	 * @param      {<type>}  key     The key
	 */
	deleteFish = (key) => {
		const fishes = { ...this.state.fishes };
		fishes[key] = null;
		this.setState({ fishes });
	}

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	}

	/**
	 * Add to Order.
	 * 1. Copy State.
	 * 2. Either add to the order, or update number in order.
	 * 3. Call setState to update state object.
	 * 
	 */
	addToOrder = (key) => {
		const order = { ...this.state.order }; 
		order[key] = order[key] + 1 || 1;     
		this.setState({ order });               
	}

	/**
	 * Remove from Order.
	 * 1. Copy State.
	 * 2. Remove item from order.
	 *    - Not mirrored in firebase so it is deleted.
	 * 3. Call setState
	 * @return     {<type>}  { description_of_the_return_value }
	 */
	removeFromOrder = (key) => {
		const order = { ...this.state.order };
		delete order[key];
		this.setState({ order });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map( key => 
							<Fish 
								key={key} 
								index={key} 
								details={this.state.fishes[key]} 
								addToOrder={this.addToOrder} 
							/>
						)}
					</ul>
				</div>
				<Order 
					fishes={this.state.fishes} 
					order={this.state.order} 
					removeFromOrder={this.removeFromOrder}
				/>
				<Inventory  
					addFish={this.addFish} 
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes} 
				/>
			</div>
		);
	}
}

export default App;
