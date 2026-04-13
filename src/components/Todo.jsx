import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

const [todoList, setTodoList] = useState([]); 

const inputRef = useRef();

const add = () => {
    const inputText = inputRef.current.value.trim();


    if (inputText === "") {
        return null;
    }
    
    const newTodo = {
        id : Date.now(),
        text : inputText,
        isComplete : false,
    }
    setTodoList((previous) => [...previous, newTodo])
    inputRef.current.value = "";

}

const deleteTodo = (id) => {
    setTodoList((previousTodos)=>{
        return previousTodos.filter((todo) => todo.id !== id)})
}

const toggle = (id)=>{
    setTodoList((previousTodos) => {
        return previousTodos.map((todo)=>{
            if (todo.id === id) {
                return{...todo, isComplete: !todo.isComplete}
            }
            return todo;
        })

    })
}

useEffect(()=>{
    console.log(todoList);
},[todoList])

  return (
    <div className='bg-emerald-50 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

{/*----------title----------------*/}


    <div className='flex items-center mt-7 gap-2'>
        <img className='w-10' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold text-emerald-900'>To-Do List</h1>
    </div>


{/*----------input box----------------*/}


    <div className='flex items-center my-7 bg-emerald-800 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 text-emerald-50 placeholder:text-slate-50' type="text" placeholder='Add Your Task'/>


        <button onClick={add} className='border-none rounded-full bg-white hover:bg-emerald-500 w-15 h-9 mr-3 text-emerald-900 fond-medium cursor-pointer'>Add+</button>
    </div>

 
{/*----------todo list----------------*/}

    <div>
    
    </div>

    {todoList.map((item, index) =>{
        return <Todoitems key={index} text={item.text} id = {item.id} isComplete = {item.isComplete} deleteTodo = {deleteTodo} toggle = {toggle} />})}

    </div>
  )
}

export default Todo