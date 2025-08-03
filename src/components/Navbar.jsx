import "../assets/css/navbar.css";
import Logo from "../assets/images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <HashLink className="navbar-brand" to="/#home" smooth>
          <img src={Logo} alt="Logo" className="logo-img" />
        </HashLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <HashLink className="nav-link navfont" to="/#home" smooth>
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link navfont" to="/#about" smooth>
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link navfont" to="/#menu" smooth>
                Menu
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link navfont" to="/book-table">
                Book Table
              </Link>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link navfont" to="/#footer" smooth>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Right Icons */}
        <div className="d-flex align-items-center gap-4">
          {/* Cart */}
          <Link className="nav-link navfont position-relative" to="/order">
            <i className="fas fa-shopping-cart fa-lg"></i>
          </Link>

          <li className="nav-item dropdown profile-dropdown">
            <a
              className="nav-link dropdown-toggle navfont"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user-circle fa-lg"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/order">
                  My Orders
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
