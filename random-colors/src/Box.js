import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';
class Box extends Component {
	constructor(props) {
		super(props);
		this.state = { boxColor: choice(this.props.colors) };
		this.handleClick = this.handleClick.bind(this);
	}
	pickColor() {
		let newColor;
		do {
			newColor = choice(this.props.colors);
		} while (newColor === this.state.boxColor);
		this.setState({ boxColor: newColor });
	}
	handleClick() {
		this.pickColor();
	}
	render() {
		return <div className="Box" style={{ backgroundColor: this.state.boxColor }} onClick={this.handleClick} />;
	}
}
export default Box;
