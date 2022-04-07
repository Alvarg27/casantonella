import React from "react";
import LanguageSelect from "./LanguageSelect";
import Hero from "./Hero";
import CategorySlider from "./CategorySlider";

export default function TopBar({
  setHoveredCategory,
  selectedCategory,
  setSelectedCategory,
  hoveredCategory,
  selectedLanguage,
  setSelectedLanguage,
  data,
  template,
}) {
  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        background: template.backgroundColor,
        boxShadow: "0 0 10px rgb(0,0,0,.25)",
        zIndex: 2,
      }}
    >
      <LanguageSelect
        setSelectedLanguage={setSelectedLanguage}
        selectedLanguage={selectedLanguage}
        template={template}
      />
      <Hero />
      <CategorySlider
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        hoveredCategory={hoveredCategory}
        setHoveredCategory={setHoveredCategory}
        selectedLanguage={selectedLanguage}
        data={data}
        template={template}
      />
    </div>
  );
}
