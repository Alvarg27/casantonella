import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/Subcategory.module.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function Subcategory({ subCategory, selectedLanguage }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={styles.subCategory}>
      <div
        onClick={() => setSelected(!selected)}
        className={styles.titleContainer}
      >
        <div className={styles.row}>
          <h3>
            {selectedLanguage === "es"
              ? subCategory.titleEs
              : subCategory.titleEn}
          </h3>
          {selected ? (
            <FaCaretUp className={styles.arrowIcon} />
          ) : (
            <FaCaretDown className={styles.arrowIcon} />
          )}
        </div>
      </div>
      <div className="line" />

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
