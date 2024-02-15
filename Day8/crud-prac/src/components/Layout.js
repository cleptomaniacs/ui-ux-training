import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Students
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/student">
                Create Student
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
