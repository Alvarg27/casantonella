import React from "react";
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
  const getCategories = () => {
    const categories = [];
    data.map((category) => {
      if (category._type === "mainCategory") {
        categories.push(category.id);
      }
    });
  };
  const ref = useRef();
  const scroll = (scrollOffset) => {
    ref.current.scrollTo({
      left: scrollOffset,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.categorySlider}>
      <div ref={ref} className={styles.categoriesContainer}>
        <div
          onClick={() => scroll(-120)}
          className={styles.arrowCircle}
          style={{ left: "0px" }}
        >
          <div className={styles.arrowIcon}>
            <GoChevronLeft />
          </div>
        </div>
        <div
          onClick={() => scroll(120)}
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
  );
}
