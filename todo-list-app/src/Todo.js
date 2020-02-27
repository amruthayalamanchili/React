import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, task: this.props.task };
		this.handleRemove = this.handleRemove.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleRemove() {
		this.props.deleteTodo(this.props.id);
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}
	handleToggle(evt) {
		this.props.toggleTodo(this.props.id);
	}
	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className="Todo">
					<form className="Todo-edit-form" onSubmit={this.handleUpdate}>
						<input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="Todo">
					<ul>
						<li
							className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
							onClick={this.handleToggle}
						>
							{this.props.task}
						</li>
					</ul>
					<button className="Todo-buttons" onClick={this.toggleForm}>
						<i class="fas fa-pen" />
					</button>
					<button onClick={this.handleRemove}>
						<i class="fas fa-trash" />
					</button>
				</div>
			);
		}
		return result;
	}
}
export default Todo;
