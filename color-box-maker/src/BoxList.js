import React, { Component } from 'react';
import Box from './Box';
import './BoxList.css';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = { boxProperties: [] };
		this.addBox = this.addBox.bind(this);
	}
	remove(id) {
		this.setState({
			boxProperties: this.state.boxProperties.filter((box) => box.id !== id)
		});
	}
	addBox(property) {
		this.setState({
			boxProperties: [ ...this.state.boxProperties, property ]
		});
	}
	render() {
		const boxes = this.state.boxProperties.map((property) => (
			<Box
				key={property.id}
				id={property.id}
				width={property.width}
				height={property.height}
				color={property.color}
				removeBox={() => this.remove(property.id)}
			/>
		));

		return (
			<div className="BoxList">
				<h1>Color box maker</h1>
				<NewBoxForm addBox={this.addBox} />
				{boxes}
			</div>
		);
	}
}
export default BoxList;
