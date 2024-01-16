"use client"
import React, { useEffect, useState } from 'react'
import DocsLayout from './components/layout/DocsLayout';

const Page = () => {
    const [data, setData] = useState([]);
    const [findData, setFindData] = useState([])
    useEffect(()=>{
        fetch("data.json").then(res => res.json()).then(data => setData(data));
        // const result = 
        // setFindData(result);
        setFindData(data.find(item => item.id==localStorage.getItem("docId")))
      },[])

      console.log("findData",findData)

    //   const findItem = 
    //   console.log(findItem)
  return (
    <>
    <DocsLayout>
        {/* <div className='bg-red-50 w-1/2'>{findItem ? findItem.description : ''}</div> */}
    </DocsLayout>
    </>
  )
}

export default Page;