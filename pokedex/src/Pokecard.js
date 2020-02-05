import React, { Component } from 'react';
import './Pokecard.css';
// const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const img_api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
	render() {
		let imgSrc = `${img_api}${padToThree(this.props.id)}.png `;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name}</h1>
				<div className="Poke-image">
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<div className="Pokecard-container">
					<p>Type : {this.props.type}</p>
					<p>EXP : {this.props.base_experience}</p>
				</div>
			</div>
		);
	}
}

export default Pokecard;
