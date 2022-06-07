import React from 'react'
import Card from './Card'
import Task from './Task'
import { useState } from 'react';
function Ziw() {
  const [Text, setText]=useState(["sfqsd"]);
  const addTask=(Text)=>{
    console.log(Text)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    // setTask("qlsmkdfjqsmdlkj")
    setText(e.target.value)
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
    <form onSubmit={handleSubmit}>
      <input type="text"/>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </form>
    <div class="grid gap-4">
      {Text.map((item)=>{
        <Text Title={item}/>
      })}
    <Task/>
    <Task/>
    <Task/>
    <Task/>
    <Task/>
    <br/>
    </div>
    
    </>
  )
}

export default Ziw