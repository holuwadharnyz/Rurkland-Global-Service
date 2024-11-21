import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Difference.module.css";

import VerifyImg from "../../public/icon/verify.svg";

const Difference = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_upper}>
        <p className={styles.difference_par}>UNIQUE WITH CLASS</p>
        <h4 className={styles.banner_h4}>Why We’re Different</h4>
        <p className={styles.difference_p}> At Rurkland, we are more than just a service provider – we are a trusted partner committed to empowering industries through reliable energy solutions. Our deep-rooted expertise, local partnerships, and unwavering focus on safety and sustainability set us apart. With Rurkland, you’re not just getting products, you’re gaining a relationship built on trust, integrity, and shared success.</p>
      </div>

      <div className={styles.container_lower}>
      
        <div className={styles.highlight}>
          <Image src={VerifyImg} className={styles.highlight_icon} />
          <h4 className={styles.banner_h2}>Partnership</h4>
        </div>
        <div className={styles.highlight}>
          <Image src={VerifyImg} className={styles.highlight_icon} />
          <h4 className={styles.banner_h2}>Expertise</h4>
        </div>
        <div className={styles.highlight}>
          <Image src={VerifyImg} className={styles.highlight_icon} />
          <h4 className={styles.banner_h2}>Sustainability</h4>
        </div>

        <Link href="/services">
          <p className={styles.difference_par2}>View Services</p>
        </Link>
      </div>

    </div>
  );
};

export default Difference;