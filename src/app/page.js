"use client";
import Banner from "../../component/01-Banner/Banner";
// import Partners from "../../component/02-Partners/Partners";
import Progress from "../../component/03-Progress/Progress";
import Mission from "../../component/04-Mission/Mission";
import WhatWeDo from "../../component/04-WhatWeDo/WhatWeDo";
import WorkProcess from "../../component/05-WorkProcess/WorkProcess";
// import Carousel from "../../component/06-OurWork/OurWork";
import Difference from "../../component/07-Difference/Difference";
import Testimonials from "../../component/08-Testimonials/Testimonials";
// import FAQ from "../../component/09-FAQ/FAQ";
import Hire from "../../component/10-Hire/Hire";
import ContactUs from "../../component/11-ContactUs/ContactUs";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      {/* <Partners /> */}
      <Progress />
      <Mission />
      <WhatWeDo />
      <WorkProcess />
      {/* <Carousel /> */}
      <Difference />
      <Testimonials />
      {/* <FAQ /> */}
      <Hire />
      <ContactUs />
    </div>
  );
}
