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
  template,
}) {
  return (
    <div
      className={styles.categoryCard}
      onClick={() => setSelectedCategory(category.id)}
      onMouseOver={() => setHoveredCategory(category.id)}
      onMouseOut={() => setHoveredCategory("")}
    >
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div
            style={{
              margin: "auto",
              fontSize: "24px",
              color:
                hoveredCategory === category.id ||
                selectedCategory === category.id
                  ? "lightgray"
                  : "grey",
            }}
          >
            <Icon iconName={category.icon} />
          </div>

          <h3
            style={{
              color:
                hoveredCategory === category.id ||
                selectedCategory === category.id
                  ? "lightgray"
                  : "grey",
            }}
          >
            {selectedLanguage === "es" ? category.titleEs : category.titleEn}
          </h3>
        </div>
      </div>
    </div>
  );
}
