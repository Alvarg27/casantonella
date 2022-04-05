import React, { useEffect } from "react";
import { sanityClient } from "../sanity";
import Subcategory from "./Subcategory";

export default function Category({ category, selectedLanguage, template }) {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      {category.subCategories.map((subCategory) => {
        if (subCategory.products.length > 0) {
          return (
            <Subcategory
              key={subCategory.id}
              subCategory={subCategory}
              selectedLanguage={selectedLanguage}
              template={template}
            />
          );
        }
      })}
    </div>
  );
}
