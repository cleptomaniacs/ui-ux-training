import React from "react";

const Filter = ({ filter, onKeyChange }) => {
  return (
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
  );
};

export default Filter;
