import styles from "../styles/ProductCard.module.css";

import React from "react";

export default function ProductCard({ product, selectedLanguage }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>
            {selectedLanguage === "es" ? product.titleEs : product.titleEn}
          </h3>
          <h3>${product.price}</h3>
        </div>

        <p>
          {" "}
          {selectedLanguage === "es"
            ? product.descriptionEs
            : product.descriptionEn}
        </p>
        <div className="line"></div>
      </div>
    </div>
  );
}
