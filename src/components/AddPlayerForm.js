import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
	static propTypes = {
		addPlayer: PropTypes.func.isRequired
	};
	state = {
		name: ''
	};

	onNameChange = e => {
		const name = e.target.value;
		this.setState({ name: name });
	};

	addPlayer = e => {
		if (e) e.preventDefault();
		this.props.addPlayer(this.state.name);
		this.setState({ name: '' });
	};
	render() {
		return (
			<div className='add-player-form'>
				<form onSubmit={this.addPlayer}>
					<input
						type='text'
						value={this.state.name}
						onChange={this.onNameChange}
						placeholder='Player Name'
					/>
					<input type='submit' value='Add Player' />
				</form>
			</div>
		);
	}
}

export default AddPlayerForm;
