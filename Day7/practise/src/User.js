import React, { useEffect, useState } from "react";
import Table from "./Table";
import EditUserForm from "./forms/EditUserForm";
import AddUserForm from "./forms/AddUserForm";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const editUser = () => {
    setEdit(true);
  };
  const deleteUser = () => {
    setEdit(false);
  };
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="row g-3 justify-content-center">
      <div className="col-lg-4">
        {edit ? <EditUserForm /> : <AddUserForm />}
      </div>
      <div className="col-lg-8">
        {users.length > 0 ? (
          !loading && (
            <Table users={users} editUser={editUser} deleteUser={deleteUser} />
          )
        ) : loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <p className="text-center">No user records</p>
        )}
      </div>
    </div>
  );
};

export default User;
