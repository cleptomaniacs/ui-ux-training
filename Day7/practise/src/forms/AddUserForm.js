import React from "react";

const AddUserForm = () => {
  return (
    <div>
      <form>
        <div className="form-group mb-2">
          <label className="form-label">Name</label>
          <input
            name="name"
            placeholder="Enter fullname"
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Title</label>
          <input
            name="title"
            placeholder="Enter title"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
