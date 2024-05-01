import React from "react";
import styles from "./Hero.module.scss";
import BorderShape from "../BorderShape";
import { ButtonIcon } from "../Button/ButtonIcon";
import { BsArrowDownShort } from "react-icons/bs";

export const Hero = ({ className = "", videoUrl, text, ...props }) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <video src={videoUrl} autoPlay playsInline loop muted />
      <div className={styles["text__wrapper"]}>
        <BorderShape
          fill="white"
          size={30}
          className={`${styles["border-shape--top"]}`}
        />
        <BorderShape
          fill="white"
          size={30}
          className={`${styles["border-shape--bottom"]}`}
        />
        <p className={styles.text}>{text}</p>
        <ButtonIcon className={styles.button}>
          <BsArrowDownShort size={30} />
        </ButtonIcon>
      </div>
    </div>
  );
};
