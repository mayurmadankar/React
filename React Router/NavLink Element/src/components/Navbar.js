import { NavLink, Outlet } from "react-router-dom";

const navStyles = ({ isActive }) =>
  isActive
    ? { backgroundColor: "#e1d1f976", border: "2px solid #fff" }
    : undefined;

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          {/* use NavLink inplace of Link to set the style to the active links */}
          <NavLink to="/" style={navStyles}>
            Home
          </NavLink>
          <NavLink to="/list" style={navStyles}>
            List
          </NavLink>
          <NavLink to="/contact" style={navStyles}>
            Contact
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
