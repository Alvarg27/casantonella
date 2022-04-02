import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/Subcategory.module.css";

export default function Subcategory({ subCategory, selectedLanguage }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={styles.subCategory}>
      <div
        onClick={() => setSelected(!selected)}
        className={styles.titleContainer}
      >
        <h3>
          {selectedLanguage === "es"
            ? subCategory.titleEs
            : subCategory.titleEn}
        </h3>
        <div className="line" />
      </div>
      {selected ? (
        <div>
          {subCategory.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                selectedLanguage={selectedLanguage}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
