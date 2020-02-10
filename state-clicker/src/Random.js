import React, { Component } from 'react';
class Random extends Component {
	constructor(props) {
		super(props);
		this.state = { num: 0 };
		this.getRandom = this.getRandom.bind(this);
	}
	getRandom() {
		let randomNum = Math.floor(Math.random() * 10 + 1);
		this.setState({
			num: randomNum
		});
	}
	render() {
		return (
			<div>
				<h1>Random Value:{this.state.num}</h1>
				{this.state.num === 7 ? (
					<h1>You win</h1>
				) : (
					<button className="randomBtn" onClick={this.getRandom}>
						Random Value
					</button>
				)}
			</div>
		);
	}
}

export default Random;
