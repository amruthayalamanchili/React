import React, { Component } from 'react';
class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'blame'
		};
	}
	render() {
		return <h1>!!!!!!{this.state.value}!!!!!</h1>;
	}
}
export default Demo;
