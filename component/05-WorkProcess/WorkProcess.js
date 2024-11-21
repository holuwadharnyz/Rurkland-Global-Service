import React from "react";
import Image from "next/image";
import styles from "./WorkProcess.module.css";

import OilAndGas from "../../public/icon/Purse.svg";
import Refining from "../../public/icon/Lab.svg";
import Truck from "../../public/icon/Rocket.svg";
import Truck2 from "../../public/icon/CR.svg";

// import Button from "../Button/Button";

const WorkProcess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <p className={styles.partners_par}>THE PROCESS</p>
        <h4 className={styles.banner_h4}>Our Work Process</h4>
        <p className={styles.partners_p}>Over the course of our years with numerous clients. We have worked out the best working process.</p>
      </div>

      <div className={styles.col2}>

        <div className={styles.card}>
          <Image src={OilAndGas} alt="" className={styles.project_img} />
          <p className={styles.wedo_p}>01</p>
          <h1 className={styles.wedo_h1}>Consultation & Customer Onboarding</h1>
        </div>

        <div className={styles.card}>
          <Image src={Refining} alt="" className={styles.project_img} />
          <p className={styles.wedo_p}>02</p>
          <h1 className={styles.wedo_h1}>Sourcing & Procurement</h1> 
        </div>

        <div className={styles.card}>
          <Image src={Truck} alt="" className={styles.project_img} />
          <p className={styles.wedo_p}>03</p>
          <h1 className={styles.wedo_h1}>Efficient Delivery & Supply</h1>
        </div>

        <div className={styles.card}>
          <Image src={Truck2} alt="" className={styles.project_img} />
          <p className={styles.wedo_p}>04</p>
          <h1 className={styles.wedo_h1}>Ongoing Support & Sustainability</h1>
        </div>

      </div>
    </div>
  );
};

export default WorkProcess;