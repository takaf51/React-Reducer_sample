import React, {useState} from 'react'
import {ACTIONS} from '../App'

export const Form = ({todoManager}) => {
	const [todo, setTodo] = useState('');
	const onChangeHamdler = e => {
		setTodo(e.target.value);
	}
	const submitNewTodo = e => {
		e.preventDefault();
		todoManager({type:ACTIONS.ADD_TODO, newToDo: {id: Date.now(), todo: todo, done: false}});
		setTodo('');
	}
	return (
		<div className='m-6 mx-auto w-11/12 bg-gray-400 p-3 rounded-lg'>
			<form onSubmit={submitNewTodo}>
				<div className=' flex flex-row gap-6 items-center'>	
					<label className='flex-1 min-w-max font-semibold' htmlFor='todo'>To-Do</label>
					<input onChange={onChangeHamdler} value={todo} className='flex-[8_1_0] block border-2 rounded-lg' type='text' id='todo'/>
					<button disabled={todo===''?true:''} className={`${todo===''?'bg-gray-300 cursor-not-allowed	':'bg-gray-600'} px-6 py-2 text-white font-semibold rounded-lg`} type='submit'>Add</button>
				</div>
			</form>
		</div>
	);
}

export default Form