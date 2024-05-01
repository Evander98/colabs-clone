import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavLink = ({ data }) => {
  return (
    <div className="navlink__container">
      {data.map(({ label, path }) => (
        <Link key={label} to={path} className="navlink">
          <p>{label}</p>
        </Link>
      ))}
      <FaInstagram size={24} className="social-icon" />
      <FaFacebook size={24} className="social-icon" />
    </div>
  );
};
