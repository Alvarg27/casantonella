import React from "react";
import styles from "../styles/CategorySlider.module.css";
import CategoryCard from "./CategoryCard";

export default function CategorySlider({
  setHoveredCategory,
  selectedCategory,
  setSelectedCategory,
  hoveredCategory,
  selectedLanguage,
  data,
  template,
}) {
  return (
    <div className={styles.categoriesContainer}>
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
  );
}
