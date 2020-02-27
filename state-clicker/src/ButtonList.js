import React, { Component } from 'react';
import './ButtonList.css';
class ButtonList extends Component {
	static defaultProps = {
		colors: [ '#dc0', '#f0f', '#efc', '#f45' ]
	};

	constructor(props) {
		super(props);
		this.state = {
			color: 'cyan'
		};
	}
	changeColor(newColor) {
		this.setState({ color: newColor });
	}

	render() {
		return (
			<div className="ButtonList" style={{ backgroundColor: this.state.color }}>
				{this.props.colors.map((c) => {
					const colorObj = { backgroundColor: c };
					return (
						//inline method binding
						// <button style={colorObj} onClick={this.changeColor.bind(this, c)}>
						<button style={colorObj} onClick={() => this.changeColor(c)}>
							Click me
						</button>
					);
				})}
			</div>
		);
	}
}
export default ButtonList;
