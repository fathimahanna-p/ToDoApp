import React from 'react'
import not_tick from '../assets/not_tick.png'
import tick_mark from '../assets/tick_mark.png'
import delete_icon from '../assets/delete_icon.png'

const Todoitems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>


        <div className='flex flex-1 item-center cursor-pointer'>
            <img className='w-8' src={tick_mark} alt="" />
            <p className='text-emerald-950 ml-4 text-[17px]'>{text}</p>
        </div>

        <div>
            <img className='w-5 cursor-pointer' src={delete_icon} alt="" />
        </div>


    </div>
  )
}

export default Todoitems