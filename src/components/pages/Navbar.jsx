import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Library Explorer
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            All Libraries
          </Link>

          <Link className="nav-link" to="/favorites">
            Favorite Libraries
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
