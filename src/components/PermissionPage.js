import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import rolesData from "../mockData/roleData";

const PermissionPage = () => {
  const [roles] = useState(rolesData); 
  const [selectedRole, setSelectedRole] = useState(roles[0]?.name || "");
  const [permissionsState, setPermissionsState] = useState(
    rolesData.find((role) => role.name === roles[0]?.name)?.permissions.map((permission) => ({
      name: permission,
      assigned: true,
    })) || []
  ); 

  const handleRoleChange = (e) => {
    const roleName = e.target.value;
    setSelectedRole(roleName);

    const selectedRolePermissions = roles.find((role) => role.name === roleName)?.permissions || [];
    setPermissionsState(
      selectedRolePermissions.map((permission) => ({
        name: permission,
        assigned: true,
      }))
    );
  };

  const handleEdit = (permissionName) => {
    setPermissionsState((prevState) =>
      prevState.map((permission) =>
        permission.name === permissionName
          ? { ...permission, assigned: !permission.assigned } 
          : permission
      )
    );
  };

  return (
    <div className="w-full px-5 pt-5">
      <h1 className="text-3xl font-bold">Permission</h1>

      <div className="flex items-center gap-2 my-6">
        <span className="text-lg">Role</span>
        <select
          className="border-2 border-solid-black cursor-pointer"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-2 border-solid">
              <th className="text-start ps-4 py-2">Permission</th>
              <th className="text-start ps-4">Assigned</th>
              <th className="text-start ps-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissionsState.map((permission, index) => (
              <tr key={index} className="border-2 border-b-solid">
                <td className="text-start ps-4 py-4">{permission.name}</td>
                <td className="text-start ps-7">
                  <input
                    type="checkbox"
                    checked={permission.assigned}
                    readOnly
                  />
                </td>
                <td className="text-start ps-7">
                  <button
                    onClick={() => handleEdit(permission.name)}
                    className="flex items-center gap-1 text-blue-500 cursor-pointer"
                  >
                    <FaRegEdit className="text-xl" />
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionPage;
