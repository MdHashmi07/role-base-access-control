import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import rolesData from '../mockData/roleData';
import RoleForm from './RoleForm';


const RolePage = () => {
  const[roles, setRoles] = useState(rolesData)
  const[selectedRole, setSelectedRole ] = useState(null);

  console.log(selectedRole);

const handleRoleChange = (e) => {
  const {name, value} = e.target;
  setSelectedRole({...selectedRole, [name]:value});
}

const saveRole = () => {
  if(selectedRole.id) {
    setRoles(roles.map(role => role.id === selectedRole.id ? selectedRole : role))
  }else {
    setRoles([...roles, {...selectedRole, id: roles.length + 1}]);
  }
  setSelectedRole(null);
}

const handleCloseForm = () => {
  setSelectedRole(null);
}


  return (
    <div className="relative w-full px-5 pt-5">
      <h1 className="text-3xl font-bold">Roles</h1>

      <button className='p-2 bg-[#E8EDF5] rounded-lg my-5' onClick={() => setSelectedRole({})}>Add Role</button>
      <table  className="border-2 border-solid w-[100%]">
        <thead>
        <tr className="border-2 border-solid">
          <th className='py-3 text-start ps-4'>Id</th>
          <th className='text-start ps-4'>Role Name</th>
          <th className='text-start ps-4'>Description</th>
          <th className='text-start ps-4'>Action</th>
        </tr>
        </thead>
        <tbody>
        {roles.map(role =>  <tr className="border border-b-2 border-solid" key={role.id}>
          <td className='text-start ps-4'>{role.id}</td>
          <td className='text-start ps-4'>{role.name}</td>
          <td className='text-start ps-4'>{role.permissions.join(", ")}</td>
          <td className="text-start ps-4 flex gap-3 py-2">
            <FaRegEdit className="size-5 cursor-pointer" onClick={() => setSelectedRole(role)}/>{" "}
            <MdOutlineDelete className="size-5 cursor-pointer" onClick={() => setRoles(roles.filter( r => r.id !== role.id))} />
          </td>
        </tr>)}
        </tbody>
      </table>
      {selectedRole && <RoleForm onClose={handleCloseForm} handleRoleChange={handleRoleChange} selectedRole={selectedRole} saveRole={saveRole} setSelectedRole={setSelectedRole}/>}
    </div>
  )
}

export default RolePage
