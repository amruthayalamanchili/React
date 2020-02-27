import React, { Component } from 'react';
import Box from './Box';
import './ColorBoxes.css';
class ColorBoxes extends Component {
	static defaultProps = {
		colors: [
			'red',
			'blue',
			'cyan',
			'purple',
			'yellow',
			'green',
			'orange',
			'olive',
			'Pistachio Green',
			'Cantaloupe',
			'Hot Pink',
			'Dark Orchid',
			'Pumpkin Orange',
			'Taupe',
			'Mustard',
			'yellowgreen'
		],
		numboxes: 16
	};

	render() {
		const boxes = Array.from({ length: this.props.numboxes }).map(() => <Box colors={this.props.colors} />);
		return <div className="ColorBoxes">{boxes}</div>;
	}
}

export default ColorBoxes;
