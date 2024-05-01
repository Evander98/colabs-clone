import { BsArrowRightShort } from "react-icons/bs";
import { ButtonIcon } from "../Button/ButtonIcon";
import styles from "./BottomSection.module.scss";

export const BottomSection = ({imageUrl = ''}) => {
  return (
    <section className={styles.container}>
      <img
        src={imageUrl}
        alt="picture"
      />
      <div className={styles.subscribe}>
        <p>
          An ecosystem to be part of. <br /> Stay in the loop.
        </p>
        <form>
          <input type="text" placeholder="Your Email Address" />
          <div>
            <span>Subscribe</span>
            <ButtonIcon className={styles["subscribe__button-icon"]}>
              <BsArrowRightShort size={30} />
            </ButtonIcon>
          </div>
        </form>
        <div>
          <p>Subscribe for updates, news, events, and community resources.</p>
        </div>
      </div>
    </section>
  );
};
