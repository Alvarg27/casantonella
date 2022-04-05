import styles from "../styles/ProductCard.module.css";
import ProductTag from "./productTag";
import React from "react";

export default function ProductCard({ product, selectedLanguage, template }) {
  const renderTags = () => {
    return (
      <div>
        {product.new ? (
          <ProductTag
            background={template.textColor}
            title="Nuevo"
            color="white"
          />
        ) : (
          ""
        )}
        {product.recommended ? (
          <ProductTag
            background={template.primaryColor}
            title="Recomendado"
            color="white"
          />
        ) : (
          ""
        )}
        {product.vegan ? (
          <ProductTag background="yellowgreen" title="Vegano" color="white" />
        ) : (
          ""
        )}
        {product.vegetarian ? (
          <ProductTag
            background="yellowgreen"
            title="Vegetariano"
            color="white"
          />
        ) : (
          ""
        )}
        {product.glutenFree ? (
          <ProductTag background="#b5a065" title="Sin gluten" color="white" />
        ) : (
          ""
        )}
        {product.sugarFree ? (
          <ProductTag background="#a2ccba" title="Sin azúcar" color="white" />
        ) : (
          ""
        )}
        {product.alcoholFree ? (
          <ProductTag
            background="
          #7663F2"
            title="Sin alcohol"
            color="white"
          />
        ) : (
          ""
        )}
      </div>
    );
  };
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
              <h3
                className={styles.title}
                style={{ color: template.textColor }}
              >
                {product.titleEn && selectedLanguage === "en"
                  ? product.titleEn
                  : product.titleEs}
              </h3>
              <h3
                className={styles.price}
                style={{ color: template.textColor }}
              >
                ${product.price}
              </h3>
            </div>
            {renderTags()}
            {product.descriptionEs ? (
              <p
                className={styles.description}
                style={{ color: template.secondaryTextColor }}
              >
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
