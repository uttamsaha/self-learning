import React from 'react'
import Navbar from '../Navbar';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';

const DocsLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className='w-[1400px] mx-auto flex gap-[20px] bg-white text-black'>
        <LeftSidebar/>
        {children}
        <RightSidebar/>
    </div>
    </>
  )
}

export default DocsLayout;