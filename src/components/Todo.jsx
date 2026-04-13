import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {
  return (
    <div className='bg-emerald-600 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

{/*----------title----------------*/}


    <div className='flex items-center mt-7 gap-2'>
        <img className='w-10' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold text-emerald-100'>To-Do List</h1>
    </div>


{/*----------input box----------------*/}


    <div className='flex items-center my-7 bg-emerald-100 rounded-full'>
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add Your Task'/>
        <button className='border-none rounded-full bg-emerald-700 hover:bg-emerald-950 w-15 h-9 mr-3 text-emerald-100 fond-medium cursor-pointer'>Add+</button>
    </div>

 
{/*----------todo list----------------*/}

    <div>
    
    </div>
       <Todoitems text="Learning Coding"/>
       <Todoitems/>
       <Todoitems/>
       <Todoitems/>
       <Todoitems/>
    </div>
  )
}

export default Todo