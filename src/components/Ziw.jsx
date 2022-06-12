import React from 'react'
import Card from './Card'
import Task from './Task'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function Ziw() {

  const [HideForm,setHideForm]=useState(true);


  const [Text, setText]=useState([{
    key:1,
    value:'lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh',
    details:'A7a',
  },
  {
    key:2,
    value:'lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh ',
    details:'A7atayn',
  },
  {
    key:3,
    value:'nibh ',
    details:'Thalethat a7at',
  }
    ]);
  const [In,setIn]=useState('')

  const [Ta,setTa]=useState('')

  const handleIn=(e)=>{
    setIn(e.target.value);
  }
  const handleTa=(e)=>{
      setTa(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(Text);
    const pair={
      key:uuidv4(),
      value:In,
      details:Ta
    }
    // console.log(pair)
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


{/*    {HideForm ? <form className='absolute bottom-30 right-4' onSubmit={handleSubmit} >
      <input type="text" value={In} onChange={handleIn}/>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </form> : null}*/}


    
{/*Creating the form*/}
    {HideForm ? <form onSubmit={handleSubmit} className='gap-3'>
                    <div class="flex -mx-3">
                        <div class="w-11/12 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Task</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input id="ta" type="text" value={In} onChange={handleIn} class="w-max -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlTextarea1" class="text-xs font-semibold px-1">Details</label>
    <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"  value={Ta} onChange={handleTa} ></textarea>
  </div>
  </div>
  <button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
</form> : null}

<button className='absolute bottom-32 right-8 ' onClick={() => setHideForm(!HideForm)}>+</button>



    <div class="grid gap-4">
    {Text.map((item)=>{
      return <Task key={item.key} Title={item.value} Details={item.details} />
    })}
    </div>
    
    </>
  )
}

export default Ziw