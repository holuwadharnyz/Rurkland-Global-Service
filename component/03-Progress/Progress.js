import React from "react";
import Image from "next/image";
import styles from "./Progress.module.css";

import Man from "../../public/static/man.png";

const ProgressService = () => {
  return (
    <div id="progress" className={styles.container}>
      <div className={styles.col1}>
        <p className={styles.partners_par}>OUR STORY</p>
        <h4 className={styles.banner_h4}>About Us</h4>
        <p className={styles.banner_P}>Rurkland Global Services Limited is a leading indigenous service provider to the oil and gas industry, incorporated in Nigeria. With years of expertise, we specialize in the marketing, supply, and trading of high-quality petroleum products, both offshore and onshore. Our product portfolio includes Fuel Oil, Gasoil, Gasoline, DPK (Dual Purpose Kerosene), Liquefied Petroleum Gas (LPG), and Liquefied Natural Gas (LNG). We are committed to delivering reliable, safe, and efficient services, ensuring sustainable energy solutions for our clients. At Rurkland, we pride ourselves on our industry knowledge, integrity, and our role in driving growth within the Nigerian oil and gas sector.</p>
      </div>

      <div className={styles.col2}>
        <Image src={Man} alt="" className={styles.project_img} />
      </div>
    </div>
  );
};

export default ProgressService;