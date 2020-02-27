import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';
class TodoListForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		const newTodo = { ...this.state, id: uuid(), completed: false };
		this.props.addTodo(newTodo);
		this.setState({ task: '' });
	}
	render() {
		return (
			<div className="NewTodoForm">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="todo">New Todo</label>
					<input type="text" id="task" name="task" value={this.state.task} onChange={this.handleChange} />
					<button>Add new Todo</button>
				</form>
			</div>
		);
	}
}
export default TodoListForm;
