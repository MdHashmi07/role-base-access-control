import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const isShowMenu = useSelector((store) => store.config.showMenuItems);

  if(!isShowMenu) return null;
  return (
    <div className='w-screen bg-[] md:w-[15%] md:min-h-screen shadow-xl'>
      <ul className='flex md:flex-col pt-5 px-3 md:px-5'>
        <Link to={"/"}><li className='font-semibold md:ps-6 py-3 text-md hover:bg-gray-100 hover:rounded-lg'>Users</li></Link>
        <Link to={"/role"}><li className='font-semibold ps-6 py-3 text-md hover:bg-gray-100 hover:rounded-lg'>Roles</li></Link>
        <Link to={"/permission"}><li className='font-semibold ps-6 py-3 text-md hover:bg-gray-100 hover:rounded-lg'>Permissions</li></Link>
        <li className='font-semibold ps-6 py-3 text-md hover:bg-gray-100 hover:rounded-lg'>Settings</li>
      </ul>
    </div>
  )
}

export default SideBar
