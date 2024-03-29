import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const Player = props => {
	return (
		<div className='player'>
			<div className='player-name'>
				<a
					className='remove-player'
					onClick={() => props.removePlayer(props.index)}
				>
					✖
				</a>
				{props.name}
			</div>
			<div className='player-score'>
				<Counter
					updatePlayerScore={props.updatePlayerScore}
					index={props.index}
					score={props.score}
				/>
			</div>
		</div>
	);
};

Player.propTypes = {
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	score: PropTypes.number.isRequired,
	removePlayer: PropTypes.func.isRequired,
	updatePlayerScore: PropTypes.func.isRequired
};

export default Player;
