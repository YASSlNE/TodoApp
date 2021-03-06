import React from 'react'
import Card from './Card'
import Task from './Task'
import { useState,useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'

import {BsFillPlusCircleFill} from "react-icons/bs"

import {motion, AnimatePresence} from 'framer-motion'

// import {db,app} from "../Firebase";

import { collection, getDocs, addDoc } from "firebase/firestore"; 

// import '@firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqpHZcALPd2Nz03N5Fk49Laaf6N8pKlho",
  authDomain: "todoapp-770e3.firebaseapp.com",
  projectId: "todoapp-770e3",
  storageBucket: "todoapp-770e3.appspot.com",
  messagingSenderId: "415512502648",
  appId: "1:415512502648:web:e27ae063fe0e9e6beca88d",
  measurementId: "G-5JKX01332J"
};




function Ziw() {


  // *Setting up firebase firestore*


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);



  const saveText=async (input)=>{
    try{
      const docRef=await addDoc(collection(db, "TodoApp"), input);
      console.log("Document written with ID:", docRef.id);
    }
    catch(e){
      console.error("Error adding document : ", e);
    }
  }

  const [Text, setText]=useState([{
    key:1,
    value:'lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh',
    category:'Business',
    details:'A7a',
  },
  {
    key:2,
    value:'lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh ',
    category:'Business',    
    details:'A7atayn',
  },
  {
    key:3,
    value:'nibh ',
    category:'Business',
    details:'Thalethat a7at',
  }
    ]);


  const getText=async()=>{
    const querySnapshot = await getDocs(collection(db, "TodoApp"));
    const pairs=[]
    querySnapshot.forEach((doc) => {
      // console.log(doc.data()['key']);7
      const key=doc.data()['key']
      const value=doc.data()['value']
      const category=doc.data()['category']
      const details=doc.data()['details']
      const pair={
        key,
        value,
        category,
        details,
      }
      pairs.push(pair);
      // console.log(pairs);
      pairs.push(Text);
      setText(pairs);
    });

  }

  // useEffect(()=>{
  //   getText();
  // },[])

// *Completed the firestore setup* 



  const [HideForm,setHideForm]=useState(true);


  
  const [In,setIn]=useState('')

  const [Ta,setTa]=useState('')

  const [Incategory,setIncategory]=useState('');

  const handleCategory=(e)=>{
    setIncategory(e.target.value);
  }

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
      category:Incategory,
      details:Ta,
    }
    // console.log(pair)
    setText([pair,...Text])
    // saveText(pair);
  }
  // The dropIn of the form
  const dropIn={
    hidden:{
      y:'-10vh',
      opacity:0,
    },
    visible:{
      y:'0',
      opacity:1,
    },
    exit:{
      y:'30vh',
      opacity:0,
    },
  };



// The dropIn of the task
  const dropInTask={
    hidden:{
      y:'-10vh',
      opacity:0,
    },
    visible:{
      y:'0',
      opacity:1,
    },
    exit:{
      y:'20vh',
      opacity:0,
    },
  };


  const [cat,setCat]=useState('');


  const cats={}
    Text.map((item)=>{
      if(item.category in cats)
        cats[item.category]++;
      else
        cats[item.category]=1;
    })

  useEffect(()=>{
    const cats={}
    Text.map((item)=>{
      if(item.category in cats)
        cats[item.category]++;
      else
        cats[item.category]=1;
    })
    
  }
  )




  // useEffect(()=>{
  //   cats.map((item)=>{
  //       console.log(item);
  //     }
  // )
  // }
  // )



  // const test=()=>{
  //   const cats={}
  //   Text.map((item)=>{
  //     if(item.category in cats)
  //       cats[item.category]++;
  //     else
  //       cats[item.category]=1;
  //   })
  //   console.log(cats)
  // }
  var cards = [];

  for(let property in cats){
        cards.push(<Card NbOfTasks={cats[property]} Category={property}/>);
  }


  return (
    <>
    <div className='text-7xl text-white'>What's up, Mahmoud!</div>
    <div>CATEGORIES</div>
    <div className="inline-flex gap-7">



    {cards}





    






    </div>
    <div>TODAY'S TASKS</div>

    {/*<button onClick={test}>click me</button>*/}
    



{/*    {HideForm ? <form className='absolute bottom-30 right-4' onSubmit={handleSubmit} >
      <input type="text" value={In} onChange={handleIn}/>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </form> : null}*/}


    
{/*Beginning of the form*/}

<div>
<AnimatePresence>
    {HideForm ? 
// <motion.form className="pt-8" autoComplete="off" animate {toggleForm ? "open" : "closed"}
//   variants={variants}>

      <motion.form variants={dropIn} initial="hidden" animate="visible" exit="exit" onSubmit={handleSubmit} className='gap-3'>

                    <div class="flex -mx-3">
                        <div class="w-11/12 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Task</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input id="ta" type="text" value={In} onChange={handleIn} class="w-max -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-11/12 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Category</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input id="ta" type="text" value={Incategory} onChange={handleCategory} class="w-max -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Business"/>
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
  <motion.button whileHover={{ scale:1.1 }} whilteTap={{ scale:0.9 }} class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
        Submit
      </motion.button>

</motion.form>


      

 : null}
</AnimatePresence>

  <motion.button whileHover={{ scale:1.4 }} whilteTap={{ scale:0.9 }}>
    <BsFillPlusCircleFill size={50} className='flex mx-40' onClick={() => setHideForm(!HideForm)}></BsFillPlusCircleFill>
  </motion.button>

</div>
{/*Ending of the form*/}








<AnimatePresence>

    <div class="grid gap-4">
    {Text.map((item)=>{
      return (<>
      <motion.div key={item.key} variants={dropIn} initial="hidden" animate="visible" exit="exit">
      <Task key={item.key} Title={item.value} Details={item.details} Category={item.category} />
      </motion.div></>)
    })}
    </div>
</AnimatePresence>
    </>
  )
}

export default Ziw