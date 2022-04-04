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
  const [categoryLength, setCategoryLength] = useState();
  const [scroll, setScroll] = useState();
  const getCategories = () => {
    const categories = [];
    data.map((category) => {
      if (category._type === "mainCategory") {
        categories.push(category.id);
      }
    });
    setCategoryLength(categories.length);
  };

  const handleScrollRight = () => {
    ref.current.scrollTo({
      left: 120,
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => {
    ref.current.scrollTo({
      left: -120,
      behavior: "smooth",
    });
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.categorySlider}>
      <div className={styles.container}>
        <div ref={ref} className={styles.categoriesContainer}>
          <div
            onClick={() => handleScrollLeft()}
            className={styles.arrowCircle}
            style={{ left: "0px" }}
          >
            <div className={styles.arrowIcon}>
              <GoChevronLeft />
            </div>
          </div>
          <div
            onClick={() => handleScrollRight()}
            className={styles.arrowCircle}
            style={{ right: "0px" }}
          >
            <GoChevronRight className={styles.arrowIcon} />
          </div>

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
