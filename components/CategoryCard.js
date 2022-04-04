import React from "react";
import styles from "../styles/CategoryCard.module.css";
import Icon from "./Icon";

export default function CategoryCard({
  category,
  setHoveredCategory,
  selectedCategory,
  setSelectedCategory,
  hoveredCategory,
  selectedLanguage,
  data,
}) {
  return (
    <div
      className={styles.categoryCard}
      onClick={() => setSelectedCategory(category.id)}
      onMouseOver={() => setHoveredCategory(category.id)}
      onMouseOut={() => setHoveredCategory("")}
    >
      <Icon iconName={category.icon} />
      <h3
        style={{
          color:
            hoveredCategory === category.id || selectedCategory === category.id
              ? "lightgray"
              : "grey",
        }}
      >
        {selectedLanguage === "es" ? category.titleEs : category.titleEn}
      </h3>
    </div>
  );
}
