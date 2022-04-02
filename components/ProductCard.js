import styles from "../styles/ProductCard.module.css";

import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.container}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
}
