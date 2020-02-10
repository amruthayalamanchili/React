import React, { Component } from 'react';
class Rando extends Component {
	constructor(props) {
		super(props);
		this.state = { num: 0 };
		this.addTimer();
	}
	addTimer() {
		let random = Math.floor(Math.random() * this.props.maxNum);
		setInterval(() => {
			this.setState({ num: random });
		}, 100);
	}
	render() {
		console.log('changing');
		return <h1>Random value: {this.state.num}</h1>;
	}
}

export default Rando;
