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
                {product.titleEn && selectedLanguage === "en"
                  ? product.titleEn
                  : product.titleEs}
              </h3>
              <h3 className={styles.price}>${product.price}</h3>
            </div>

            {product.descriptionEs ? (
              <p className={styles.description}>
                {product.descriptionEn && selectedLanguage === "en"
                  ? product.descriptionEn
                  : product.descriptionEs}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="line" style={{ marginTop: "10px" }}></div>
      </div>
    </div>
  );
}
