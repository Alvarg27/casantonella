import React from "react";
import styles from "../styles/Hero.module.css";

export default function Hero({ template }) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <img src="/casantonella-logo.webp" />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
