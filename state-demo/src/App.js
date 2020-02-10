import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando';
import Clicked from './Clicked';

function App() {
	return (
		<div className="App">
			<Game name="badminton" />
			<Demo player1="jose" player2="james" />
			<Rando maxNum={7} />
			<Clicked />
		</div>
	);
}

export default App;
