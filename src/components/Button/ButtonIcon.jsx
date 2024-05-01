import styles from "./Button.module.scss";

export const ButtonIcon = ({ children, className = '', ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
