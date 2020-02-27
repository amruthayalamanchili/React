import React, { Component } from 'react';
class NumberItem extends Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}
	handleRemove() {
		this.props.remove(this.props.val);
	}
	render() {
		return (
			<div>
				<li>
					{this.props.val}
					<button onClick={this.handleRemove}>X</button>
				</li>
			</div>
		);
	}
}

export default NumberItem;
