import React from 'react';
import PropTypes from 'prop-types';

// Example of Stateless Functional Component.
const Header = (props) => (
	<header className="top">
		<h1>
			Catch 
			<span className="ofThe">
				<span className="of">of</span>
				<span className="the">the</span>
			</span>
			Day
		</h1>
		<h3 className="tagline">
			<span>{props.tagline}</span>
		</h3>
	</header>
);

Header.propTypes = {
	tagline: PropTypes.string.isRequired
}

export default Header;

/*
 If component only has a render method. It can be converted into a statelesss function component.

Stateless Functional Components.
- They no longer have a this style. The props must be passed into the function.
- You may also deconstruct the props into its prop names. Provided thatthe data is passed.
   - (props) => {...}  can be ({tagline, age}) => {...}


Example of component. See above for stateless functional component.
class Header extends React.Component {
	render() {
		return (
			<header className="top">
				<h1>
					Catch 
					<span className="ofThe">
						<span className="of">of</span>
						<span className="the">the</span>
					</span>
					Day
				</h1>
				<h3 className="tagline">
					<span>{this.props.tagline}</span>
				</h3>
			</header>
		);
	}
}

 */
