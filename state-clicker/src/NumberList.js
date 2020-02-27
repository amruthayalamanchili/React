import React, { Component } from 'react';
import NumberItem from './NumberItem';
class NumberList extends Component {
	constructor(props) {
		super(props);
		this.state = { nums: [ 1, 2, 3, 4, 5, 6, 7 ] };
		this.remove = this.remove.bind(this);
	}

	remove(num) {
		this.setState((st) => ({
			nums: st.nums.filter((element) => element !== num)
		}));
	}

	render() {
		//using the same data as keys works only when the elements in the data are unique
		// keys can rely on index but if we need reorder the data it doesnt work in that scenario
		let number = this.state.nums.map((n) => <NumberItem key={n} val={n} remove={this.remove} />);
		return <ul>{number}</ul>;
	}
}

export default NumberList;
