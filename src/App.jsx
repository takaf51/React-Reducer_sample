import React, {useState, useReducer} from 'react'
import Form from './component/Form'
import List from './component/List'

export const ACTIONS = {
	ADD_TODO: 'add-todo',
	TOGGLE_TODO: 'toggle-todo',
	DELETE_TODO: 'delete-todo'
}

const manager = (state, action) => {
	switch(action.type){
		case ACTIONS.ADD_TODO:
			return [...state, action.newToDo];
		case ACTIONS.TOGGLE_TODO:
			return state.map(todo => (todo.id===action.id?{...todo, done: !todo.done}:todo));
		case ACTIONS.DELETE_TODO:
		return state.filter(todo => todo.id!=action.id);
		default:
			return state
	}
}

export const App = () => {

	const [todos, todoManager] = useReducer(manager, []);

	return (
		<>
			<Form todoManager={todoManager}/>
			<List todos={todos} todoManager={todoManager}/>
		</>
	);
}
