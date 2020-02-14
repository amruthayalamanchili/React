import React, { Component } from 'react';
import './Die.css';

// const DiceArray = [
// 	'fas fa-dice-one',
// 	'fas fa-dice-two',
// 	'fas fa-dice-three',
// 	'fas fa-dice-four',
// 	'fas fa-dice-five',
// 	'fas fa-dice-six'
// ];
class Die extends Component {
	render() {
		return <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && 'shaking'} `} />;
	}
}
export default Die;
