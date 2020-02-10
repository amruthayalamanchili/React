import React, { Component } from 'react';
class Clicked extends Component {
	constructor(props) {
		super(props);
		this.state = { isClicked: false };
		this.buttonClick = this.buttonClick.bind(this);
	}
	buttonClick() {
		this.setState({ isClicked: true });
	}
	render() {
		return (
			<div>
				<h1>{this.state.isClicked ? 'Clicked' : 'Not Clicked'}</h1>;
				<button onClick={this.buttonClick}>Click me</button>;
			</div>
		);
	}
}
export default Clicked;
