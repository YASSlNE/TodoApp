import React from 'react'
import PropTypes from "prop-types"

function Task({Title}) {
  Task.defaultProps={
    Title: 'Github Finder'
  }
  return (
    <>
        <div className="flex justify-center">
  <div className="bg-blue-800 w-80 h-16 rounded-2xl shadow-2xl bg-white ">
  <div className="inline-flex gap-4">
      <div className='pl-4 pt-2'>
      <input type="checkbox" class="form-checkbox h-10 w-10 accent-pink-500"/>
      {/* <input checked id="red-checkbox" type="checkbox" value="" class="w-10 h-10 text-red-600 bg-gray-100 rounded-xl border-gray-300 dark:bg-gray-700 dark:border-gray-600"/> */}
      </div>
      <label className="form-check-label inline-block text-lg text-white pt-4">
      {Title}
      </label>
    </div>
  </div>
</div>
    </>
    
  )
  
}

export default Task