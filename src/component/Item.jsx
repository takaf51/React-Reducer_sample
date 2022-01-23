import React from 'react'
import {ACTIONS} from '../App'

export const Item = ({item, todoManager}) => {
	return (
	<li className={`${item.done?'bg-gray-200':'bg-purple-400'} flex flex-row justify-between m-2 px-2 py-2 rounded-md`}>
		<h1>{item.todo}</h1>
		<div>
			<button 
				onClick={()=>todoManager({type:ACTIONS.TOGGLE_TODO, id: item.id})} 
				className='bg-gray-500 text-white px-1.5 py-1 text-sm rounded-md mx-1'>
				Toggle
			</button>
			<button 
				onClick={()=>todoManager({type:ACTIONS.DELETE_TODO, id: item.id})}  
				className='bg-gray-500 text-white px-1.5 py-1 text-sm rounded-md mx-1'>
				Delete
			</button>
		</div>
	</li>
	);
}

export default Item