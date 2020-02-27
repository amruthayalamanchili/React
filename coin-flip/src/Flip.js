import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';
import './Flip.css';
class Flip extends Component {
	static defaultProps = {
		coins: [
			{
				sides: 'head',
				imgSrc: 'https://n4.sdlcdn.com/imgs/g/v/l/1-RUPEE-1976-INDIAN-COIN-SDL884894584-1-a271b.jpg'
			},
			{ sides: 'tail', imgSrc: 'https://www.bing.com/th?id=OIP.RgZ0gv_jEraY6RSYnYOgywHaHa&pid=Api&rs=1' }
		]
	};
	constructor(props) {
		super(props);
		this.state = {
			nFlips: 0,
			headCount: 0,
			tailCount: 0,
			currCoin: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	flip() {
		const newCoin = choice(this.props.coins);
		this.setState((st) => {
			return {
				currCoin: newCoin,
				nFlips: st.nFlips + 1,
				headCount: st.headCount + (newCoin.sides === 'head' ? 1 : 0),
				tailCount: st.tailCount + (newCoin.sides === 'tail' ? 1 : 0)
			};
		});
	}

	handleClick() {
		this.flip();
	}

	render() {
		return (
			<div className="Flip">
				<h1>Let's flip a Coin</h1>
				{this.state.currCoin && <Coin info={this.state.currCoin} />}
				<button onClick={this.handleClick}>Click me</button>
				<p>
					Out of {this.state.nFlips} flips,there have been {this.state.headCount} heads and
					{this.state.tailCount} tails
				</p>
			</div>
		);
	}
}

export default Flip;
