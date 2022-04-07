import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

export default function Hero({ template }) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="/casantonella-logo.webp"
            height="100%"
            width="180px"
            alt="CASA ANTONELLA"
          />
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
