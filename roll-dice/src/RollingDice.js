import React, { Component } from 'react';
import Die from './Die';
import './RollingDice.css';
class RollingDice extends Component {
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};
	constructor(props) {
		super(props);
		this.state = {
			dice1: 'one',
			dice2: 'two',
			rolling: false
		};
		this.roll = this.roll.bind(this);
	}
	roll() {
		//To create random faces
		let randomDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
		let randomDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
		//set state with new rolls
		this.setState({ dice1: randomDie1, dice2: randomDie2, rolling: true });
		//wait one second come to original state
		setTimeout(() => {
			this.setState({ rolling: false });
		}, 1000);
	}
	render() {
		return (
			<div className="RollingDice">
				<div className="RollingDice-container">
					<Die face={this.state.dice1} rolling={this.state.rolling} />
					<Die face={this.state.dice2} rolling={this.state.rolling} />
				</div>
				<button onClick={this.roll} disabled={this.state.rolling}>
					{this.state.rolling ? 'Rolling ....' : 'RollDice'}
				</button>
			</div>
		);
	}
}
export default RollingDice;
