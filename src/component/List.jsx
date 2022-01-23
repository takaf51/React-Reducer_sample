import React from 'react'
import Item from './Item'

export const List = ({todos, todoManager}) => {
	return (
		<ul className='m-2'>
			{todos.map(todo => (<Item key={todo.id} item={todo} todoManager={todoManager}/>))}
		</ul>
	);
}

export default List