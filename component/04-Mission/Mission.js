import React from "react";
import Image from "next/image";
import styles from "./Mission.module.css";

import Man from "../../public/static/mission.png";

const Mission = () => {
  return (
    <div className={styles.container}>

      <div className={styles.col2}>
        <Image src={Man} alt="" className={styles.project_img} />
      </div>

      <div className={styles.col1}>
        {/* <p className={styles.partners_par}>OUR STORY</p> */}
        <h4 className={styles.banner_h4}>Our Mission</h4>
        <p className={styles.banner_P}>At Rurkland Global Services, our mission is simple: to lead with excellence, innovate for the future, and drive sustainable growth. We are committed to delivering unmatched value to our partners by prioritizing safety, minimizing environmental impact, and constantly pushing the boundaries of what’s possible. With a focus on responsible operations and a strong financial foundation, we are dedicated to building a future where both our business and the world around us thrive.</p>
      </div>
    </div>
  );
};

export default Mission;