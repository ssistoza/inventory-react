import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';


class Fish extends React.Component {
	
	/**
	 * All fish types are the same. We are passing this type to the class instead of the object.
	 */
	static propTypes = {
		details: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			desc: PropTypes.string,
			status: PropTypes.string,
		}),
		addToOrder: PropTypes.func,

	}

	render() {

		/**
		 * ES6 Destructuring.
		 *
		 * Old way
		 *  const image = this.props.details.image;
		 *  const name = this.props.details.name;
		 *  const price = this.props.details.price;
		 *  const status = this.props.details.status;
		 */
		const {image, name, price, desc, status} = this.props.details;
		const isAvailable = status === 'available';

		return (
			<li className="menu-fish">
				<img src={image} alt={name}/>
				<h3 className="fish-name">
					{name}
					<span className="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button 
					disabled={!isAvailable}  
					onClick={() => this.props.addToOrder(this.props.index)}> 
					{isAvailable ? 'Add to Order' : 'Sold Out!'} 
				</button>
			</li>
		);
	}
}

export default Fish;