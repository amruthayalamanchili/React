import React, { Component } from 'react';
class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
			gameOver: false
		};
		this.increment1 = this.increment1.bind(this);
		this.increment3 = this.increment3.bind(this);
	}
	increment1() {
		this.setState((st) => {
			return { score: st.score + 1 };
		});
	}
	increment3() {
		this.setState((st) => {
			return { score: st.score + 3 };
		});
	}
	render() {
		return (
			<div>
				<h1>Your Score : {this.state.score}</h1>
				<button onClick={this.increment1}>increment1</button>
				<button onClick={this.increment3}>increment3</button>
			</div>
		);
	}
}
export default Game;
