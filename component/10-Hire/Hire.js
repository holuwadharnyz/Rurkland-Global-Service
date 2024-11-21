import React from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from "./Hire.module.css";
import Button from "../Button/Button";

import HireImg from "../../public/static/hire.png";

const Hire = () => {

  const mailtoLink = `mailto:admin@rurkland.com?subject=Join%20Rurkland&body=My%20name%20is`;
  
  return (
    <div className={styles.container}>
      <p className={styles.partners_par}>WE ARE HIRING</p>
      <h4 className={styles.banner_h4}>Recruitment</h4>
      <p className={styles.banner_P}>We are looking for smart individuals who want to have a positive impact on the world. If that’s you, visit our Careers page or send us a CV at: info@rurklandglobal.com</p>

      <Link href={mailtoLink} passHref>
      <Button backgroundColor="#4158EE" textColor="#fff" padding="12px 30px">Join Us</Button>
      </Link>

      <Image src={HireImg} className={styles.hire_img} />
    </div>
  );
};

export default Hire;
