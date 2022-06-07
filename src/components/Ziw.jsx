import React from 'react'
import Card from './Card'
import Task from './Task'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function Ziw() {

  const [HideForm,setHideForm]=useState(true);


  const [Text, setText]=useState([{
    key:1,
    value:'Task1'
  },
  {
    key:2,
    value:'Task2'
  }
    ]);
  const [In,setIn]=useState('')
  const handleIn=(e)=>{
    // console.log(e.target.value)
    setIn(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(Text);
    const pair={
      key:uuidv4(),
      value:In,
    }
    setText([pair,...Text])
  }
  

  return (
    <>
    <div>What's up, Mahmoud!</div>
    <div>CATEGORIES</div>
    <div className="inline-flex gap-7">
    <Card/>
    <Card/>
    </div>
    <div>TODAY'S TASKS</div>


    {HideForm ? <form className='absolute bottom-30 right-4' onSubmit={handleSubmit} >
      <input type="text" value={In} onChange={handleIn}/>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </form> : null}


    <button className='absolute bottom-32 right-8 ' onClick={() => setHideForm(!HideForm)}>+</button>

    <div class="grid gap-4">
    {Text.map((item)=>{
      return <Task key={item.key} Title={item.value}/>
    })}
    <br/>
    </div>
    
    </>
  )
}

export default Ziw