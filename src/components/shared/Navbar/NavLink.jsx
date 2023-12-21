import { NavLink } from "react-router-dom";

const NavbarLink = () => {
  return (
    <div className="space-x-5">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        Login 
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline" : ""
        }
      >
        Register 
      </NavLink>
    </div>
  );
};

export default NavbarLink;