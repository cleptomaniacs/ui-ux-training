import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Practise
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/filters">
                Filters
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid mt-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
