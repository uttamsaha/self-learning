"use client"
import React, { useEffect, useState } from 'react'

const LeftSidebar = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("data.json").then(res => res.json()).then(data => setData(data));
  },[])
  return (
    <div className=' w-[200px] overflow-y-scroll bg-blue-50 h-[800px]  text-black'>
      {
        data.map(item => <div key={item.id} className='mb-[4px] '>
          <p className='cursor-pointer' onClick={()=>{localStorage.setItem("docId",item.id)}}>{item.title}</p>
        </div>)
      }
    </div>
  )
}

export default LeftSidebar;