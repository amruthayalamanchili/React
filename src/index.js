import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { choice, remove } from './helpers';
import fruits from './fruits';
var selected = choice(fruits);
var removed = remove(fruits, selected);
class App extends Component {
	render() {
		return (
			<div>
				<p>I'd like one {selected} ,please</p>
				<p>Here you go {selected}</p>
				<p>Delicious ! May I Have Another one</p>
				{removed};
				<p>I m sorry ,we are all out.We have {removed.length} others fruits left</p>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
