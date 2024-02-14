function Footer() {
  return (
    <nav className="navbar navbar-dark bg-dark position-absolute bottom-0 end-0 start-0">
      <div className="container">
        <p className="navbar-text m-0 p-0 text-center">
          Copyright &copy; {new Date().getFullYear()} , WeCare All rights
          reserved
        </p>
      </div>
    </nav>
  );
}

export default Footer;
