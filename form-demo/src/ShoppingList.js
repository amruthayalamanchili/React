import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';
import uuid from 'uuid/v4';
class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [ { name: 'curd', qty: '2gallons', id: uuid() }, { name: 'tomatoes', qty: '3 gals', id: uuid() } ]
		};
		this.addItem = this.addItem.bind(this);
	}
	addItem(item) {
		let newItem = { ...item, id: uuid() };
		this.setState((state) => ({
			items: [ ...state.items, newItem ]
		}));
	}
	renderItems() {
		return (
			<ul>
				{this.state.items.map((item) => (
					<li key={item.id}>
						{item.name} : {item.qty}
					</li>
				))}
			</ul>
		);
	}
	render() {
		return (
			<div>
				<h1>Shopping List</h1>
				{this.renderItems()}
				<ShoppingListForm addItem={this.addItem} />
			</div>
		);
	}
}
export default ShoppingList;
