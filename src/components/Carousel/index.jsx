import { useEffect, useState, Children } from "react";
import styles from "./Carousel.module.scss";

export const Carousel = ({
  children,
  className = "",
  autoplay = false,
  interval = 3000,
  ...props
}) => {
  const childArray = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === childArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [currentIndex, childArray.length, interval]);

  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {childArray.map((child, index) => (
        <div
          key={index}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
