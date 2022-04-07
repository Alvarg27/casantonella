import React, { useEffect } from "react";
import { sanityClient } from "../sanity";
import Subcategory from "./Subcategory";

export default function Category({
  category,
  selectedLanguage,
  template,
  zoom,
  setZoom,
}) {
  return (
    <div>
      {category.subCategories.map((subCategory) => {
        if (subCategory.products.length > 0) {
          return (
            <Subcategory
              key={subCategory.id}
              subCategory={subCategory}
              selectedLanguage={selectedLanguage}
              template={template}
              zoom={zoom}
              setZoom={setZoom}
            />
          );
        }
      })}
    </div>
  );
}
