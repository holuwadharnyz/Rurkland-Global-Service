import React from "react";
import Image from "next/image";
import styles from "./WhatWeDo.js.module.css";

import OilAndGas from "../../public/icon/petrol.svg";
import Truck from "../../public/icon/marine.svg";
import Refining from "../../public/icon/refining.svg";
import Shake from "../../public/icon/shake.svg";
import Bus from "../../public/icon/bus.svg";

import Spiral from "../../public/icon/spiral.svg";

// import Button from "../Button/Button";

const WhatWeDoService = () => {
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
          <p className={styles.wedo_P}>Rurkland specializes in providing high-quality marine fuels, including Very Low Sulphur Fuel Oil (VLSFO) and Low Sulphur Marine Gas Oil (LSMGO). With a focus on compliance and performance, our fuels ensure optimal efficiency for vessels while meeting international environmental standards. Trust us to power your maritime operations responsibly.</p>
        </div>

        <div className={styles.card}>
          <Image src={Refining} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>Bunker Fuel Distribution</h2>
          <p className={styles.wedo_P}>We are your trusted partner for bunker fuel distribution, ensuring vessels are supplied at essential ports and strategic coastal sites across Nigeria. Our reliable network and superior product quality keep your operations on course, offering unmatched service in the dynamic maritime industry.</p>
        </div>

      </div>

      <div className={styles.col3}>
        <div className={styles.card2}>
          <Image src={Shake} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>Collaboration with Local Refineries</h2>
          <p className={styles.wedo_P}>Through strategic partnerships with Nigeria’s top refineries, Rurkland ensures the consistent distribution of premium fuels. This collaboration allows us to support local industries while delivering the high standards of quality and reliability our clients demand, both onshore and offshore.</p>
        </div>

        <div className={styles.card2}>
          <Image src={Bus} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>Transportation & Distribution</h2>
          <p className={styles.wedo_P}>Rurkland’s robust transportation and distribution services guarantee the safe and efficient delivery of petroleum products to clients nationwide. Our fleet and logistics expertise ensure uninterrupted supply, minimizing downtime and maximizing operational productivity.</p>
        </div>
        
      </div>


    </div>
  );
};

export default WhatWeDoService;