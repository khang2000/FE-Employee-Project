import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const history = useNavigate();
  const getUser = localStorage.getItem("user");
  const image = getUser.image;
  const userLogout = () => {
    // localStorage.removeItem("user");
    // localStorage.removeItem("token");
    // localStorage.removeItem("role");
    localStorage.clear();

    history("/login");
  };

  return (
    <div>
      <div className="log-in"></div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <div className="log-out">
              <button
                onClick={userLogout}
                className="nav-link active btn-logout"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  // className="nav-link dropdown-toggle"
                  className="nav-link"
                  href="#"
                  // id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaRegUserCircle size={23} color="black" />
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={userLogout}
                      className="dropdown-item nav-link active btn-logout"
                    >
                      Đăng xuất
                    </button>
                  </li>

                  {/* <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
