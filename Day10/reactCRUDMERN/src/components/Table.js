import React from "react";
import { Link } from "react-router-dom";

const Table = ({ columns, tableData, onDelete, onSort, onAsc }) => {
  return tableData.length > 0 ? (
    <table className="table table-bordered table-striped mt-4">
      <thead>
        <tr>
          {columns.length > 0 &&
            columns.map((col) => (
              <td
                key={col}
                onClick={() => onSort(col)}
                style={{ cursor: "pointer" }}
              >
                <p className="m-0 p-0 d-flex justify-content-between">
                  {col}
                  <span>{onAsc ? "↑" : "↓"}</span>
                </p>
              </td>
            ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((user, index) => {
          return (
            <tr key={index}>
              <th scope="row">{user._id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>@{user.rollno}</td>
              <td>
                <Link
                  className="btn btn-primary btn-sm me-2"
                  to={"/edit-student/" + user._id}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p className="text-center">No results found</p>
  );
};

export default Table;
