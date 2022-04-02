import styles from "../styles/ProductCard.module.css";

import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{product.title}</h3>
          <h3>${product.price}</h3>
        </div>

        <p>{product.description}</p>
        <div className="line"></div>
      </div>
    </div>
  );
}
