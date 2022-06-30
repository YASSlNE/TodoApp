import React,{useState} from 'react'
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import { CgDetailsMore } from "react-icons/cg";

function Task({Title, Details, Category}) {
  Task.defaultProps={
    Title: 'Task',
    Details: 'Details',
    Category: 'Business',
  }
  const handleClick=()=>{
    console.log(Details)
    console.log(Category)
  }
  const [Checked,setChecked]=useState(false)

  const handleCheck=()=>{
    setChecked(!Checked)
  }

  return (
    <>
    
    <div className="flex bg-blue-700 my-2 justify-between break-all max-w-3xl py-6 h-auto  rounded-2xl shadow-2xl bg-white">

        <div className="px-4">
          <input onChange={handleCheck} type="checkbox" class="form-checkbox h-10 w-10 accent-pink-500" checked={Checked}/>
        </div>
        <div className="text-lg text-white">
        {Title}
        </div>
        <div onClick={handleClick}>
          <button className='px-4'><CgDetailsMore size={50} color="white"/></button>
        </div>
    </div>

    </>
    
  )
  
}

export default Task