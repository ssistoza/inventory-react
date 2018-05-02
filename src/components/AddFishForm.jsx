import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
	static propTypes = {
		addFish: PropTypes.func
	};


	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	/**
	 * Creates a fish.
	 *  1. Stop the form submitting.
	 *  2. Create fish object.
	 *  3. Add to fisth state.
	 *  4. Refresh the form and clear it.
	 *
	 * @param      {event}  event   The event
	 */
	createFish = (event) => {
		event.preventDefault();

		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value),
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value,
		}

		this.props.addFish(fish);
		event.currentTarget.reset();
	}

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish} >
				<input type="text" name="name" ref={this.nameRef} placeholder="Name" />
				<input type="text" name="price" ref={this.priceRef} placeholder="Price" />
				<select namet="status" ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<text-area name="desc" ref={this.descRef} placeholder="Desc" />
				<input type="text" name="image" ref={this.imageRef} placeholder="Image" />
				<button type="submit">Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;