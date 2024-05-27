import { CardWithArrow } from "../../../../components/Cards/CardWithArrow";
import styles from "./CommunitySection.module.scss";

const data = [
  {
    image: {
      title: "Beyond the bench",
      backgroundColor: "#32c58b",
      url: "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F07%2F3-horizons-.png&w=1920&q=75",
    },
    title: "What are the 3 Horizons of Transformative Innovation?",
    description:
      "‘Three Horizons thinking’ is a useful method for making sense of and facilitating transformative innovation.",
  },
  {
    image: {
      title: "Beyond the bench",
      backgroundColor: "#32c58b",
      url: "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F06%2F16.png&w=1920&q=75",
    },
    title: "Living Systems Thinking: Exploring the Integral Patterns of Life",
    description:
      "At the cutting edge of science, a new way of making sense of the world is beginning to emerge. One that moves from parts to wholes,  from quantities to qualities, from measuring to mapping and from absolute certainty to approximate knowledge.",
  },
  {
    image: {
      title: "Thoughts",
      backgroundColor: "#d9db4d",
      url: "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F05%2Fblogpost_worldview.jpg&w=1920&q=75",
    },
    title: "Why We Need to Rethink Our Worldview",
    description:
      "In today's rapidly changing world, our dominant worldview is being challenged by the complexities and interconnectedness of global issues.",
  },
];

export const CommunitySection = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>
        Space for big thinking, problem-solvers and bio-innovators
      </p>
      <div className={styles["content__wrapper"]}>
        <div>
          <p className="pill">Community</p>
        </div>
        <div className={styles["card-content__wrapper"]}>
          {data.map(({ image, description, title }) => (
            <div key={title}>
              <CardWithArrow className={styles["card-content"]}>
                <p
                  className={styles["card-content__img__title"]}
                  style={{ backgroundColor: image.backgroundColor }}
                >
                  {image.title}
                </p>
                <img
                  className={styles["card-content__img"]}
                  src={image.url}
                  width="100%"
                  height="100%"
                  alt={title}
                />
              </CardWithArrow>
              <p className={styles["card-content__title"]}>{title}</p>
              <p className={styles["card-content__description"]}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
