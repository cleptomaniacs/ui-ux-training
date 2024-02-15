import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
const itemsPerPage = 10; // Number of items to show per page
function StudentList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [userForm, setUserForm] = useState([]);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const indexOfLastPost = pageNumber * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const page = data.slice(indexOfFirstPost, indexOfLastPost);
    setUserForm(page);
  };

  const deleteStudent = (_id) => {
    if (!window.confirm("Are you sure you want to delete this data?")) {
      return;
    }
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
      resetPagination(data, currentPage);
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
      resetPagination(data, currentPage);
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

  const resetPagination = (data, currentPage) => {
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const page = data.slice(indexOfFirstPost, indexOfLastPost);
    setUserForm(page);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => {
        //setUserForm(res.data.data);
        setData(res.data.data);
        const resData = res.data.data;
        resetPagination(resData, 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Search onChange={onChange} />
      <Filter filter={filter} onKeyChange={onKeyChange} />
      <Table
        columns={["#", "Name", "Email", "Roll No", "Action"]}
        tableData={userForm}
        onDelete={deleteStudent}
      />
      <div className="d-flex justify-content-between">
        <p className="form-text text-muted">
          Showing {userForm.length} of {data.length} records
        </p>
        <Pagination
          currentPage={currentPage}
          postsPerPage={itemsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default StudentList;
