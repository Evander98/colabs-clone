import { Search } from "../Search";
import { NavLink } from "./NavLink";
const navLink = [
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "About",
    path: "/",
  },
  {
    label: "Our Principles",
    path: "/",
  },
  {
    label: "Comunity",
    path: "/",
  },
  {
    label: "Contact",
    path: "/",
  },
];

export const Nav = ({ isVisible, className = "", ...props }) => {
  return (
    <div
      className={`nav ${isVisible ? "" : "hidden lg-visible"} ${className}`}
      {...props}
    >
      <p className="nav__title lg-d-none">Welcome to Colabs</p>
      <Search hidden="lg" />
      <NavLink data={navLink} />
    </div>
  );
};
