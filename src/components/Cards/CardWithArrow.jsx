import { BsArrowRightShort } from "react-icons/bs";
import { ButtonIcon } from "../Button/ButtonIcon";
import styles from "./Card.module.scss";
import BorderShape from "../BorderShape";
export const CardWithArrow = ({
  children,
  className = "",
  isFocused = false,
  ...props
}) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
      <div className={styles["card__button__wrapper"]}>
        <ButtonIcon
          className={isFocused ? styles["card__button__icon--focused"] : ""}
        >
          <BsArrowRightShort size={30} />
        </ButtonIcon>
        <BorderShape
          fill="white"
          className={`${styles["border-shape--top"]}`}
        />
        <BorderShape
          fill="white"
          className={`${styles["border-shape--bottom"]}`}
        />
      </div>
    </div>
  );
};
