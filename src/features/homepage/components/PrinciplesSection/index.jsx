import { BsArrowRightShort } from "react-icons/bs";
import { ButtonIcon } from "../../../../components/Button/ButtonIcon";
import styles from "./PrinciplesSection.module.scss";
export const PrinciplesSection = () => {
  return (
    <div className={`card ${styles.container}`}>
      <video autoPlay loop playsInline muted>
        <source
          src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/homepage-cells.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.wrapper}>
        <p className={styles.text}>Reposition Science</p>
        <p className={styles.text}>Redefine our Approach</p>
        <p className={styles.text}>Rethink Entrepreneurship</p>
        <p className={styles.text}>Regenerate our Planet</p>
        <div className={styles["button__wrapper"]}>
          <p className={styles["button__text"]}>Our Principles</p>
          <ButtonIcon className={styles["button__icon"]}>
            <BsArrowRightShort size={30} />
          </ButtonIcon>
        </div>
      </div>
    </div>
  );
};
