import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NavbarLink = () => {
  const { user } = useAuth();

  return (
    <div className="space-x-4 text-lg font-semibold">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline text-[#006ce1]" : ""
        }
      >
        Home
      </NavLink>
      {!user && <><NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline text-[#006ce1]" : ""
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline text-[#006ce1]" : ""
        }
      >
        Register
      </NavLink></>}
    </div>
  );
};

export default NavbarLink;
