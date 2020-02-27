import React from 'react';
import logo from './logo.svg';
import './App.css';
import Random from './Random';
import ButtonList from './ButtonList';
import NumberList from './NumberList';

function App() {
	return (
		<div className="App">
			<Random />
			<ButtonList />
			<NumberList />
		</div>
	);
}

export default App;
