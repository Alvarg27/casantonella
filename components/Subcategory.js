import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/Subcategory.module.css";

export default function Subcategory({ subCategory }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={styles.subCategory}>
      <div
        onClick={() => setSelected(!selected)}
        className={styles.titleContainer}
      >
        <h3>{subCategory.title}</h3>
      </div>
      {selected ? (
        <div>
          {subCategory.products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
