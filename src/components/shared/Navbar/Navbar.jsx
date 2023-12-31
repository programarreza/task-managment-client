import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import NavbarLink from "./NavLink";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm absolute bg-transparent z-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavbarLink />
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost text-xl">Task Management</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarLink />
        </ul>
      </div>
      <div className="navbar-end">
        <DropDown />
        <Theme />
      </div>
    </div>
  );
};

export default Navbar;
