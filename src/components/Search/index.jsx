import { useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import styles from "./Search.module.scss";

export const Search = ({ className = "", hidden, show, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const hiddenClass = hidden ? styles[`search--${hidden}-hidden`] : "";
  const showClass = show ? styles[`search--${show}-show`] : "";
  const isOpenclass = isOpen ? styles["search--lg-show--open"] : "";
  const combinedClass = `${styles.search} ${hiddenClass} ${showClass} ${isOpenclass} ${className}`;

  return (
    <div className={combinedClass} {...props}>
      <input
        className={isOpen ? styles.open : ""}
        type="text"
        placeholder="Search here..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div
        className={`${styles["search__icon"]} ${
          isOpen ? styles["search__icon--open"] : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <PiMagnifyingGlassLight size={24} />
      </div>
    </div>
  );
};
