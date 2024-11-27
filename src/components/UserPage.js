import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaHandLizard, FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import usersData from "../mockData/userData";
import AddUserForm from "./AddUserForm";

const UserPage = () => {
  const [users, setUsers] = useState(usersData);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const saveUser = () => {
    if (selectedUser.id) {
      setUsers(
        users.map((user) => (user.id === selectedUser.id ? selectedUser : user))
      );
    } else {
      setUsers([...users, { ...selectedUser, id: users.length + 1 }]);
    }
    setSelectedUser(null)
  };

  const handleCloseForm = () => {
    setSelectedUser(null);
  };

  return (
    <div className="relative md:w-full px-3 md:px-5 pt-5 py-5">
      <h1 className=" text-xl md:text-3xl font-bold">Users</h1>
      <div className="flex gap-5">
        <div className="md:py-2 md:px-3 bg-[#E8EDF5] md:w-[92%] my-5 flex items-center gap-3 rounded-lg">
          <CiSearch className="size-6 text-[#4A789C]" />
          <input
            type="text"
            placeholder="Search by name, email or role"
            className="bg-[#E8EDF5] md:w-[100%] text-[#4A789C] outline-none"
          />
        </div>
        <button
          className="md:p-2 bg-[#E8EDF5] rounded-lg my-5 text-[#4A789C]"
          onClick={() => setSelectedUser({})}
        >
          Add User
        </button>
      </div>
      <table className="border-2 border-solid md:w-[100%]">
        <thead>
          <tr className="border-2 border-solid">
            <th className="md:w-10">Id</th>
            <th className="text-start ps-4 py-3">Name</th>
            <th className="text-start ps-4">Email</th>
            <th className="text-start ps-4">Role</th>
            <th className="text-start ps-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="border border-b-2 border-solid" key={user.id}>
              <td className="text-center">{user.id}</td>
              <td className="text-start ps-4 h-10">{user.name}</td>
              <td className="text-start ps-4">{user.email}</td>
              <td className="text-start ps-4 font-semibold">{user.role}</td>
              <td className="text-start ps-4 text-[#4A789C]">{user.status}</td>
              <td className="text-start ps-4 flex gap-3 py-2">
                <FaRegEdit className="size-5 cursor-pointer" onClick={() => setSelectedUser(user)}/>{" "}
                <MdOutlineDelete className="size-5 cursor-pointer" onClick={() => setUsers(users.filter(u => u.id !== user.id))}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <AddUserForm
          onClose={handleCloseForm}
          handleUserChange={handleUserChange}
          selectedUser={selectedUser}
          saveUser={saveUser}
        />
      )}
    </div>
  );
};

export default UserPage;
