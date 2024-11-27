import React from "react";

const RoleForm = ({
  onClose,
  handleRoleChange,
  selectedRole,
  saveRole,
  setSelectedRole,
}) => {
  return (
    <div className="fixed top-0 left-0 bg-gray-800 bg-opacity-50 flex justify-center items-center w-screen h-screen z-50">
      <div className="bg-white py-4 px-6 rounded-lg w-1/2 shadow-lg">
        <form action="">
          <h2 className="font-semibold text-2xl mb-2">
            {selectedRole.id ? "EDIT ROLE" : "ADD ROLE"}
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700">Role Name</label>
            <select className="w-full px-4 py-2 rounded border" name="name" value={selectedRole.name || ''} onChange={handleRoleChange}>
              <option value="">Select an option</option>
              <option value="Admin">Admin</option>
              <option value="Editer">Editor</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Permission</label>
            <select
              multiple
              name="permissions"
              value={selectedRole.permissions || []}
              onChange={(e) =>
                setSelectedRole({
                  ...selectedRole,
                  permissions: Array.from(
                    e.target.selectedOptions,
                    (option) => option.value
                  ),
                })
              }
              className="w-full p-2 border rounded"
            >
              <option value="Read">Read</option>
              <option value="Write">Write</option>
              <option value="Delete">Delete</option>
            </select>
          </div>
          <div className="flex  justify-end">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={saveRole}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleForm;
