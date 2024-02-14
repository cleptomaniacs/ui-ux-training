import React from "react";

export const Table = (props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 &&
          props.users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.title}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary">Edit</button>
                &nbsp;&nbsp;
                <button className="btn btn-sm btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
