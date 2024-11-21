import React from "react";
import Image from "next/image";
import styles from "./WorkProcess.module.css";

import Headphone from "../../public/icon/headphone.svg";
import Sheild from "../../public/icon/shield.svg";
import Globe from "../../public/icon/globe.svg";

// import Button from "../Button/Button";

const WorkProcessServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <h4 className={styles.banner_h4}>Our Featured</h4>
      </div>

      <div className={styles.col2}>

        <div className={styles.card}>
          <Image src={Headphone} alt="" className={styles.project_img} />
          <h1 className={styles.wedo_h1}>Support 24/7</h1>
        </div>

        <div className={styles.card}>
          <Image src={Sheild} alt="" className={styles.project_img} />
          <h1 className={styles.wedo_h1}>Quality Assurance</h1> 
        </div>

        <div className={styles.card}>
          <Image src={Globe} alt="" className={styles.project_img} />
          <h1 className={styles.wedo_h1}>Sustainability</h1> 
        </div>

      </div>
    </div>
  );
};

export default WorkProcessServices;