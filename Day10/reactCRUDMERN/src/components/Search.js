import React from "react";

const Search = ({ onChange }) => {
  return (
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
  );
};

export default Search;
