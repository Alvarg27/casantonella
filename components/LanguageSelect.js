import React from "react";
import styles from "../styles/LanguageSelect.module.css";

export default function LanguageSelect({
  setSelectedLanguage,
  selectedLanguage,
}) {
  return (
    <div className={styles.languageSelect}>
      <div className={styles.container}>
        <div
          className={styles.languageContainer}
          onClick={() => setSelectedLanguage("es")}
        >
          <p style={{ color: selectedLanguage === "es" ? "white" : "grey" }}>
            {"Español (ES)"}
          </p>
        </div>
        <div
          className={styles.languageContainer}
          onClick={() => setSelectedLanguage("en")}
        >
          <p style={{ color: selectedLanguage === "en" ? "white" : "grey" }}>
            {"English (EN)"}
          </p>
        </div>
      </div>
    </div>
  );
}
