import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const CreateStudent = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/students", data)
      .then((res) => {
        console.log(res.data);
        document.getElementById("form").reset();
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };
  return (
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <h3>Student registration</h3>
        <form id="form" onSubmit={handleSubmit((data) => onSubmit(data))}>
          <div className="form-group mb-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter student name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="form-text text-danger">Student name is required</p>
            )}
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter student age"
              {...register("age", {
                required: true,
                pattern: /\d+/,
                min: 18,
                max: 60,
              })}
            />
            {errors.age && (
              <p className="form-text text-danger">Student age is required</p>
            )}
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Roll Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter student roll number"
              {...register("rollNo", { required: true, pattern: /\d+/ })}
            />
            {errors.rollNo && (
              <p className="form-text text-danger">
                Student roll number is required
              </p>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
