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
          <p>Español</p>
        </div>
        <div
          className={styles.languageContainer}
          onClick={() => setSelectedLanguage("en")}
        >
          <p>Inglés</p>
        </div>
      </div>
    </div>
  );
}
