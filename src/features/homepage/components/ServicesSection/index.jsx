import { CardWithArrow } from "../../../../components/Cards/CardWithArrow";
import { Carousel } from "../../../../components/Carousel";
import styles from "./ServicesSection.module.scss";

const data = [
  {
    imageUrl:
      "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F05%2F2JF5R14-scaled.jpg&w=2048&q=75",
    title: "Build a Lab",
    backgroundColor: "#66662a",
  },
  {
    imageUrl:
      "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F05%2FM49EM8-scaled.jpg&w=2048&q=75",
    title: "Innovation Facilitation",
    backgroundColor: "#b1653b",
  },
  {
    imageUrl:
      "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F06%2Foffice-space-icon.jpg&w=2048&q=75",
    title: "Office Space",
    backgroundColor: "#5757a5",
  },
  {
    imageUrl:
      "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F05%2FWX8JWA-scaled.jpg&w=2048&q=75",
    title: "Lab Space",
    backgroundColor: "#0046c7",
  },
];

export const ServicesSection = () => {
  return (
    <div>
      <p className={`headline--md ${styles.title}`}>
        We design, build and run collaborative spaces where bio-led science,
        technology and people can thrive
      </p>
      <p className={`pill ${styles.text}`}>Our Services</p>
      <Carousel autoplay className={styles.carousel}>
        {data.map(({ title, imageUrl, backgroundColor }) => (
          <div key={title}>
            <CardWithArrow
              className={styles["card__item"]}
              style={{ backgroundColor }}
            >
              <p className={styles["card__item__title"]}>{title}</p>
              <img src={imageUrl} alt={title} />
            </CardWithArrow>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
