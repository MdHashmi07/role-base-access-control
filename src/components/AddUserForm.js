import React from 'react'
import rolesData from '../mockData/roleData'

const AddUserForm = ({ onClose , handleUserChange, selectedUser, saveUser}) => {
  return (
    <div className='fixed top-0 left-0 bg-gray-800 bg-opacity-50 flex justify-center items-center w-screen h-screen z-50'>
    <div className='bg-white py-4 px-6 rounded-lg w-1/2 shadow-lg'>
      <form action="">
        <h2 className='font-semibold text-2xl mb-2'>{selectedUser.id ? 'EDIT USER' : 'ADD USER'}</h2>
        <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input type="text" name="name" value={selectedUser.name || ''} onChange={handleUserChange} placeholder='Enter user name' className='w-full px-4 py-2 rounded border' />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input type="email" name='email' value={selectedUser.email || ''} onChange={handleUserChange} placeholder='Enter your email' className='w-full px-4 py-2 rounded border' />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700'>Role</label>
            <select name="role" id="" value={selectedUser.role || ''} onChange={handleUserChange}  className='w-full px-4 py-2 rounded border' >
                <option value="">Select</option>
                {rolesData.map(role => <option value={role.name}>{role.name}</option>)}
            </select>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700'>Status</label>
            <select name="status" id="" value={selectedUser.status || ''} onChange={handleUserChange} className='w-full px-4 py-2 rounded border' >
                <option value="">Select</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
        </div>
        <div className='flex  justify-end'>
            <button className='bg-gray-500 text-white px-4 py-2 rounded mr-2' onClick={onClose}>Cancel</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={saveUser}>Save</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default AddUserForm
