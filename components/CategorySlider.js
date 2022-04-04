import React, { useEffect, useState } from "react";
import styles from "../styles/CategorySlider.module.css";
import CategoryCard from "./CategoryCard";
import { useRef } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export default function CategorySlider({
  setHoveredCategory,
  selectedCategory,
  setSelectedCategory,
  hoveredCategory,
  selectedLanguage,
  data,
  template,
}) {
  const ref = useRef();
  const categoryLength = data.length * 110;
  const scrollEnd = categoryLength - 340;
  const [scroll, setScroll] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(ref.current.scrollLeft);

  useEffect(() => {
    ref.current.addEventListener("scroll", handleScroll);

    return () => ref.current.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollRight = () => {
    ref.current.scrollTo({
      left: 110,
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => {
    ref.current.scrollTo({
      left: -110,
      behavior: "smooth",
    });
  };

  console.log(scrollEnd);

  return (
    <div className={styles.categorySlider}>
      <div className={styles.container}>
        <div ref={ref} className={styles.categoriesContainer}>
          {offsetX === 0 ? (
            ""
          ) : (
            <div
              onClick={() => handleScrollLeft()}
              className={styles.arrowCircle}
              style={{ left: "-10px" }}
            >
              <div className={styles.arrowIcon}>
                <GoChevronLeft />
              </div>
            </div>
          )}
          {offsetX >= scrollEnd ? (
            ""
          ) : (
            <div
              onClick={() => handleScrollRight()}
              className={styles.arrowCircle}
              style={{ right: "-10px" }}
            >
              <GoChevronRight className={styles.arrowIcon} />
            </div>
          )}

          {data.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                category={category}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                hoveredCategory={hoveredCategory}
                setHoveredCategory={setHoveredCategory}
                selectedLanguage={selectedLanguage}
                data={data}
                template={template}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
