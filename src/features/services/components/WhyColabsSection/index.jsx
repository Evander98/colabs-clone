import styles from "./WhyColabsSection.module.scss";
export const WhyColabsSection = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.title} headline--md`}>
        By facilitating systems innovation we believe we can generate social,
        economic and environmental outcomes that will benefit the health and
        well-being of people and the planet.
      </p>
      <div className={styles["content__wrapper"]}>
        <div>
          <p className="pill">Why CoLabs</p>
        </div>
        <div className={styles.grid}>
          <div className={`card ${styles.card}`}>
            <p>Access enabling infrastructure</p>
            <p>
              Co-Labs membership offers state-of-the-art facilities, equipment,
              and services to foster innovation in the biotechnology sector.
            </p>
            <p></p>
          </div>
          <div className={`card ${styles.card}`}>
            <p>Access enabling infrastructure</p>
            <p>
              Co-Labs membership offers state-of-the-art facilities, equipment,
              and services to foster innovation in the biotechnology sector.
            </p>
            <p></p>
          </div>
          <div className={`card ${styles.card}`}>
            <p>Access enabling infrastructure</p>
            <p>
              Co-Labs membership offers state-of-the-art facilities, equipment,
              and services to foster innovation in the biotechnology sector.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
