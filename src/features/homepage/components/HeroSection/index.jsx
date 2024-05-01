import React from "react";
import styles from "./HeroSection.module.scss";
import { Hero } from "../../../../components/Hero";
import { CardWithArrow } from "../../../../components/Cards/CardWithArrow";
export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <Hero
        videoUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/colabs-hero.mp4"
        text="Making space for transformative innovation"
      />
      <div className={styles["detail__container"]}>
        <div>

        </div>
        {/* <CardWithArrow>
          <p>Join the Lab</p>
        </CardWithArrow> */}
      </div>
    </div>
  );
};
