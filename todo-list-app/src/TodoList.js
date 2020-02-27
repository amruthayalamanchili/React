import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
		this.addTodo = this.addTodo.bind(this);
		this.delete = this.delete.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	delete(id) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	}
	addTodo(newtodo) {
		this.setState({
			todos: [ ...this.state.todos, newtodo ]
		});
	}
	update(id, updatedTask) {
		const updatedTodo = this.state.todos.map((t) => {
			if (t.id === id) {
				return { ...t, task: updatedTask };
			} else {
				return t;
			}
		});
		this.setState({ todos: updatedTodo });
	}
	toggleCompletion(id) {
		const updatedTodo = this.state.todos.map((t) => {
			if (t.id === id) {
				return { ...t, completed: !t.completed };
			} else {
				return t;
			}
		});
		this.setState({ todos: updatedTodo });
	}

	render() {
		const todoList = this.state.todos.map((element) => (
			<Todo
				key={element.id}
				id={element.id}
				task={element.task}
				completed={element.completed}
				deleteTodo={this.delete}
				updateTodo={this.update}
				toggleTodo={this.toggleCompletion}
			/>
		));
		return (
			<div className="TodoList">
				<h1>Todos List</h1>
				{todoList}
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}
export default TodoList;
