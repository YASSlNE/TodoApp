import React,{useEffect} from 'react'


function Card({NbOfTasks,Category}) {

  Card.defaultProps={
    NbOfTasks:50,
    Category:"Business",
  }




  if(NbOfTasks>20)
    NbOfTasks=20
  const percentage=(NbOfTasks/20)*208;

  // useEffect(()=>{
  //   // console.log("percentage is "+percentage.toString());
  //   const percentage=(NbOfTasks/20)*100;
  // })

  console.log("percentage"+ percentage)

  // const perc=50;



  return (
    <>
    <div className="flex justify-center">
  <div className="bg-blue-800 block w-64 h-30 p-6 rounded-3xl shadow-2xl bg-white max-w-sm">
    <p className="text-gray-400 text-base mb-4">
      {NbOfTasks} tasks
    </p>
    <h5 className="text-white text-xl leading-tight font-medium mb-2">{Category}</h5>
    <br/>
    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div className="bg-pink-500 h-1.5 rounded-full dark:bg-gray-300" style={{width : percentage}}></div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card