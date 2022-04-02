import styles from "../styles/ProductCard.module.css";

import React from "react";

export default function ProductCard({ product, selectedLanguage }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.container}>
        <div className={styles.containerRow}>
          {product.mainImage ? (
            <div className={styles.productImage}>
              <img src={product.mainImage} />
            </div>
          ) : (
            ""
          )}
          <div className={styles.productInfo}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className={styles.title}>
                {selectedLanguage === "es" ? product.titleEs : product.titleEn}
              </h3>
              <h3 className={styles.price}>${product.price}</h3>
            </div>

            <p className={styles.description}>
              {" "}
              {selectedLanguage === "es"
                ? product.descriptionEs
                : product.descriptionEn}
            </p>
          </div>
        </div>
        <div className="line" style={{ marginTop: "30px" }}></div>
      </div>
    </div>
  );
}
