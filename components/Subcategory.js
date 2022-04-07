import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/Subcategory.module.css";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

export default function Subcategory({
  subCategory,
  selectedLanguage,
  template,
  zoom,
  setZoom,
}) {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.subCategory}>
      <div
        onClick={() => setSelected(!selected)}
        className={styles.titleContainer}
      >
        <div className={styles.row}>
          <div style={{ margin: " 0" }}>
            <h3 style={{ color: template.textColor }}>
              {selectedLanguage === "es"
                ? subCategory.titleEs
                : subCategory.titleEn}
            </h3>
            {subCategory.descriptionEs ? (
              <p
                style={{ margin: "5px 0 0 0", fontSize: "14px", color: "gray" }}
              >
                {selectedLanguage === "es"
                  ? subCategory.descriptionEs
                  : subCategory.descriptionEn}
              </p>
            ) : (
              ""
            )}
          </div>
          {selected ? (
            <GoChevronUp className={styles.arrowIcon} />
          ) : (
            <GoChevronDown className={styles.arrowIcon} />
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
                template={template}
                zoom={zoom}
                setZoom={setZoom}
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
