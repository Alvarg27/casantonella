import styles from "../styles/ProductCard.module.css";
import ProductTag from "./productTag";
import React, { useState } from "react";
import Image from "next/image";
import { sanityClient } from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

export default function ProductCard({
  product,
  selectedLanguage,
  template,
  zoom,
  setZoom,
}) {
  const builder = imageUrlBuilder(sanityClient);

  const handleClick = () => {
    if (zoom === product.id) {
      setZoom(false);
    } else {
      setZoom(product.id);
    }
  };

  function urlFor(source) {
    return builder.image(source);
  }
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
      <div
        className={styles.container}
        onClick={() => handleClick()}
        style={{
          boxShadow: zoom === product.id ? "0 0 20px rgb(0,0,0,0.25)" : "",
        }}
      >
        <div className={styles.containerRow}>
          {product.mainImage ? (
            <div
              className={styles.productImage}
              style={{
                height: zoom === product.id ? "100%" : "100%",
                width: zoom === product.id ? "180px" : "120px",
              }}
            >
              <Image
                className={styles.image}
                src={urlFor(product.mainImage).width(240).height(240).url()}
                width={zoom === product.id ? "180px" : "120px"}
                height={zoom === product.id ? "180px" : "120px"}
                alt={product.titleEs}
                placeholder="blur"
                blurDataURL={urlFor(product.mainImage)
                  .width(24)
                  .height(24)
                  .url()}
                style={{
                  height: zoom === product.id ? "100%" : "100%",
                  width: zoom === product.id ? "180px" : "120px",
                }}
              />
            </div>
          ) : (
            ""
          )}
          <div className={styles.productInfo}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3
                className={styles.title}
                style={{
                  color: template.textColor,
                  fontSize: zoom === product.id ? "20px" : "16px",
                }}
              >
                {product.titleEn && selectedLanguage === "en"
                  ? product.titleEn
                  : product.titleEs}
              </h3>
              <h3
                className={styles.price}
                style={{
                  color: template.textColor,
                  fontSize: zoom === product.id ? "20px" : "16px",
                }}
              >
                {product.price ? "$" + product.price : "--"}
              </h3>
            </div>
            {renderTags()}
            {product.descriptionEs ? (
              <p
                className={styles.description}
                style={{
                  color: template.secondaryTextColor,
                  fontSize: zoom === product.id ? "16px" : "14px",
                }}
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
        <div
          className="line"
          style={{
            marginTop: "10px",
            opacity: zoom === product.id ? "0" : 1,
            background: template.borderColor,
          }}
        ></div>
      </div>
    </div>
  );
}
