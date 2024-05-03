import { CardWithArrow } from "../../../../components/Cards/CardWithArrow";
import styles from "./BlogSection.module.scss";

const data = [
  {
    label: "We believe biology is the future of technology",
    image: {
      url: "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F06%2F87591_river_flowing_downstream_over_rocks_By_Omri_Ohana_Artlist_HD-1.jpg&w=3840&q=75",
      isRounded: true,
      backgroundColor: "#b1653b",
    },
  },
  {
    label: "Join a thriving ecosystem that supports big ideas",
    image: {
      url: "https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/bigideas.jpg",
      isRounded: false,
      backgroundColor: "",
    },
  },
  {
    label: "Learn, Imagine, Explore – Tune into our podcast",
    image: {
      url: "https://colabs.yourcreative.com.au/wp-content/uploads/2023/08/Fern.png",
      isRounded: false,
      backgroundColor: "",
    },
  },
];

export const BlogSection = () => {
  return (
    <div className={styles.container}>
      {data.map(({ image, label }) => (
        <CardWithArrow
          key={label}
          className={styles.item}
          style={{ backgroundColor: image.backgroundColor }}
        >
          <p>{label}</p>
          <img
            src={image.url}
            alt={label}
            className={image.isRounded ? styles.rounded : styles.img}
          />
        </CardWithArrow>
      ))}
    </div>
  );
};
