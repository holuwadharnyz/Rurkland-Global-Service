import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";


import Button from "../Button/Button";

const BannerService = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.banner_h1}>Our Services</h1>
    </div>
  );
};

export default BannerService;
