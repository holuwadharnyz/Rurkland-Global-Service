import React from "react";
import Image from "next/image";
import styles from "./WhatWeDo.js.module.css";
import Link from "next/link";

import OilAndGas from "../../public/icon/petrol.svg";
import Truck from "../../public/icon/marine.svg";
import Refining from "../../public/icon/refining.svg";
import Spiral from "../../public/icon/spiral.svg";
import Button from "../Button/Button";


const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <p className={styles.partners_par}>OUR SERVICES</p>
        <h4 className={styles.banner_h4}>What We Do</h4>
        <Image src={Spiral} alt="" className={styles.spiral_img} />
      </div>

      <div className={styles.col2}>

        <div className={styles.card}>
          <Image src={OilAndGas} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>Delivery of Petroleum Products</h2>
          <p className={styles.wedo_P}>At Rurkland, we ensure seamless sourcing and delivery of premium petroleum products from leading refineries across Nigeria. Our global reach and robust logistics network enable us to provide clients with timely and reliable energy solutions, tailored to their specific needs. Whether it's Fuel Oil, Gasoline, or LNG, we deliver excellence every step of the way.</p>
        </div>

        <div className={styles.card}>
          <Image src={Truck} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>Supply of Marine Fuels</h2>
          <p className={styles.wedo_P}>Rurkland specializes in providing high-quality marine fuels, Bunker Fuels. With a focus on compliance and performance, our fuels ensure optimal efficiency for vessels while meeting international environmental standards. Trust us to power your maritime operations responsibly.</p>
        </div>

        <div className={styles.card}>
          <Image src={Refining} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>Bunker Fuel Distribution</h2>
          <p className={styles.wedo_P}>We are your trusted partner for bunker fuel distribution, ensuring vessels are supplied at essential ports and strategic coastal sites across Nigeria. Our reliable network and superior product quality keep your operations on course, offering unmatched service in the dynamic maritime industry.</p>
        </div>

      </div>
      <Link href='/services'>
      <Button border="1px solid #4158EE" backgroundColor="transparent" padding="12px 50px">View More</Button>
      </Link>
    </div>
  );
};

export default WhatWeDo;
