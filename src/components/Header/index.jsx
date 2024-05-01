import { useState } from "react";
import { Nav } from "../Nav";
import { Button } from "../Button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Search } from "../Search";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../assets/SVGs/logo.svg";
import BorderShape from "../BorderShape";

export const Header = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
      <div className={styles["top-bar"]} />
      <header className="header__container">
        <Link to="/" className={styles.logo}>
          <p>Naarm/Melbourne</p>
          <img src={Logo} alt="Colabs" width={100} />
          <BorderShape
            fill="#FFFFFF"
            size={30}
            className={`${styles["border-shape"]} border-shape__top-right`}
          />
          <BorderShape
            fill="#FFFFFF"
            size={30}
            className={styles["border-shape-bottom"]}
          />
        </Link>
        <Button
          className={`${styles.button} lg-d-none`}
          onClick={() => setNavToggle((prev) => !prev)}
          outlined={navToggle}
        >
          {navToggle ? "Close" : "Menu"}
        </Button>
        <div
          className={`${styles["social-media__wrapper"]} ${
            navToggle ? styles["social-media__wrapper--active"] : ""
          } `}
        >
          <span className={navToggle ? styles["no-border"] : ""}>
            <FaInstagram size={24} className={styles["social-media__logo"]} />
            <FaFacebook size={24} className={styles["social-media__logo"]} />
          </span>
          <BorderShape
            fill="#d9db4d"
            size={24}
            className={`border-shape__bottom-left ${styles["border-shape"]} ${
              navToggle ? "" : "hidden"
            }`}
          />
        </div>
        <Nav className="relative" isVisible={navToggle} />
        <Search show="lg" />
      </header>
    </>
  );
};
