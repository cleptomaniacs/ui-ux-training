function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <div className="container">
        <a className="navbar-brand">WeCare</a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link">
              <i className="fa fa-phone" aria-hidden="true"></i> Call Us:
              9154812804
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
