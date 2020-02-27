import React, { Component } from 'react';
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', email: '', password: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		alert(`You typed ${this.state.username}`);
		this.setState({ username: '' });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1> Form </h1>
					<label htmlFor="username">Username</label>
					<input
						name="username"
						id="username"
						type="text"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<label htmlFor="email">Email</label>
					<input name="email" id="email" type="email" value={this.state.email} onChange={this.handleChange} />
					<label htmlFor="password">Password</label>
					<input
						name="password"
						id="password"
						type="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
export default Form;
