import React from "react";
import Image from "next/image";
import styles from "./Partners.module.css";
import Marquee from "react-fast-marquee";

import Image10 from "../../public/icon/image10.svg";
import Image2 from "../../public/icon/image2.svg";
import Image6 from "../../public/icon/image6.svg";
import Image4 from "../../public/icon/image4.svg";
import Image8 from "../../public/icon/image8.svg";

const Partners = () => {
  return (
    <div className={styles.container}>

      <div id="partner" className={styles.partners_header}>
        <p className={styles.partners_par}>PEOPLE IN BUSINESS WITH US</p>
        <h4 className={styles.banner_h4}>Trusted Partners</h4>
      </div>
      <Marquee gradient={false} speed={100}>
        <div className={styles.container_inner}>
          <Image src={Image10} alt="" className={styles.partners_img2} />
          <Image src={Image2} alt="" className={styles.partners_img2} />
          <Image src={Image6} alt="" className={styles.partners_img2} />
          <Image src={Image4} alt="" className={styles.partners_img2} />
          <Image src={Image8} alt="" className={styles.partners_img2} />
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
