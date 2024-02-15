import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function StudentList() {
  const [userForm, setUserForm] = useState([]);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const deleteStudent = (_id) => {
    axios
      .delete(`http://localhost:4000/students/delete-student/${_id}`)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (event) => {
    let search = event.target.value;
    if (search === "") {
      setUserForm(data);
      return;
    }

    const filteredData = data.filter(
      (item) =>
        (search !== "" &&
          item.name.toLowerCase().includes(search.toLowerCase())) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.rollno.toString().includes(search.toString())
    );
    setUserForm(filteredData);
  };

  const onKeyChange = (event) => {
    const currentFilter = {
      ...filter,
      [event.target.name]: event.target.value,
    };
    setFilter(currentFilter);
    onFilter(currentFilter);
  };

  const onFilter = (currentFilter) => {
    if (
      currentFilter.name === "" &&
      currentFilter.email === "" &&
      currentFilter.rollno === ""
    ) {
      setUserForm(data);
      return;
    }
    const filteredData = data.filter(
      (item) =>
        (currentFilter.name !== "" &&
          item.name.toLowerCase().includes(currentFilter.name.toLowerCase())) ||
        (currentFilter.email !== "" &&
          item.email
            .toLowerCase()
            .includes(currentFilter.email.toLowerCase())) ||
        (currentFilter.rollno !== "" &&
          item.rollno.toString().includes(currentFilter.rollno.toString()))
    );
    setUserForm(filteredData);
  };

  const fetchStudents = () => {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => {
        setUserForm(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <div className="row mb-2">
        <div className="col-lg-4">
          <input
            className="form-control"
            placeholder="Search..."
            name="search"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="row">
        <input
          type="text"
          className="form-control col"
          placeholder="Name"
          name="name"
          onChange={onKeyChange}
          value={filter.name}
        />
        &nbsp;
        <input
          type="text"
          className="form-control col"
          placeholder="Email"
          name="email"
          onChange={onKeyChange}
          value={filter.email}
        />
        &nbsp;
        <input
          type="text"
          className="form-control col"
          placeholder="Roll Number"
          name="rollno"
          onChange={onKeyChange}
          value={filter.rollno}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Roll no</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
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
                    onClick={() => deleteStudent(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
