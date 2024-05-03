import styles from "./HeroSection.module.scss";
import { Hero } from "../../../../components/Hero";
import { CardWithArrow } from "../../../../components/Cards/CardWithArrow";
import { useState } from "react";
import Slider from "react-slick";

const carouselData1 = [
  { text: "Ideas Supported", value: 28 },
  { text: "Impact Scholarship Awarded", value: 14 },
  { text: "Of plants here double as lab assistants", value: "65%" },
  { text: "Chance of running into a punny scientist", value: "95%" },
  { text: "Of science equipment diverted from landfill", value: "2,200Kg" },
];

export const HeroSection = () => {
  const [isFocused, setIsFocused] = useState({ item1: false, item2: false });
  const focusHandler = (item, value) => {
    setIsFocused((prev) => ({ ...prev, [item]: value }));
  };
  return (
    <div className={styles.container}>
      <Hero
        videoUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/colabs-hero.mp4"
        text="Making space for transformative innovation"
      />
      <div className={styles["detail__container"]}>
        <div className={styles["detail-1"]}>
          <Slider
            dots
            infinite
            autoplay
            speed={500}
            arrows={false}
            className={styles["detail-1__wrapper"]}
          >
            {carouselData1.map(({ text, value }) => (
              <div key={text}>
                <p className={styles["detail-1__value"]}>{value}</p>
                <p className={styles["detail-1__text"]}>{text}</p>
              </div>
            ))}
          </Slider>
        </div>
        <CardWithArrow
          className={styles["detail-2"]}
          onMouseEnter={() => focusHandler("item1", true)}
          onMouseLeave={() => focusHandler("item1", false)}
          isFocused={isFocused.item1}
        >
          <p>Join the Lab</p>
          <img
            src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/dragonfly-1.jpg"
            alt="Join the Lab"
          />
        </CardWithArrow>
        <CardWithArrow className={styles["detail-3"]}>
          <p>Biomimicry</p>
        </CardWithArrow>
      </div>
    </div>
  );
};
