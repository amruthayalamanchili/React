import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewBoxForm.css';
class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = { height: '', width: '', color: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		const newBox = { ...this.state, id: uuid() };
		this.props.addBox(newBox);
		this.setState({ height: '', width: '', color: '' });
	}
	render() {
		return (
			<div class="NewBoxForm">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="height">Height : </label>
					<input id="height" name="height" value={this.state.height} onChange={this.handleChange} />
					<label htmlFor="width">Width : </label>
					<input id="width" name="width" value={this.state.width} onChange={this.handleChange} />
					<label htmlFor="backgroundColor">BackgroundColor : </label>
					<input id="color" name="color" value={this.state.color} onChange={this.handleChange} />
					<button>Add box</button>
				</form>
			</div>
		);
	}
}
export default NewBoxForm;
