import React from "react";
import styles from "../styles/LanguageSelect.module.css";

export default function LanguageSelect({
  setSelectedLanguage,
  selectedLanguage,
  template,
}) {
  return (
    <div className={styles.languageSelect}>
      <div className={styles.container}>
        <div
          className={styles.languageContainer}
          onClick={() => setSelectedLanguage("es")}
        >
          <p
            style={{ color: selectedLanguage === "es" ? "lightgrey" : "grey" }}
          >
            {"Español (ES)"}
          </p>
        </div>
        <div
          className={styles.languageContainer}
          onClick={() => setSelectedLanguage("en")}
        >
          <p
            style={{ color: selectedLanguage === "en" ? "lightgrey" : "grey" }}
          >
            {"English (EN)"}
          </p>
        </div>
      </div>
    </div>
  );
}
