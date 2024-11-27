import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex  flex-col md:flex-row w-[100%]'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body
