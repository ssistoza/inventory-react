import React from 'react';

/**
 * States are allowed in children component but will not be accessible by the parent.
 *
 */
class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			example: new Date()
		};
	}

	render() {
		console.log(this.state.example);
		return <h1>I'm an Example Component</h1>;
	}
}

export default Example;