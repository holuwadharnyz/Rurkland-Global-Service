// import React from "react";
// import Image from "next/image";
// import styles from './OurWork.module.css';
// import { useState } from 'react';

// import ProjectImg from "../../public/static/project.png";

// const OurWork = () => {
//   // State to keep track of the current slide index
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Example data (replace with your dynamic data)
//   const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   // Number of items to show per view
//   const itemsPerView = 3;

//   // Calculate maximum index based on the total number of items
//   const maxIndex = Math.max(0, Math.ceil(data.length / itemsPerView) - 1);

//   // Navigation Handlers
//   const goNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
//   };

//   const goPrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
//   };

//   return (
//     <div className={styles.carouselContainer}>
//       {/* Carousel Items */}
//       <div className={styles.carousel}>
//         {data
//           .slice(currentIndex * itemsPerView, currentIndex * itemsPerView + itemsPerView)
//           .map((item, index) => (
//             <div key={index} className={styles.carouselItem}>
//               {item}
//             </div>
//           ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className={styles.navigation}>
//         <button className={styles.navButton} onClick={goPrev}>
//           &#x276E; {/* Left Arrow */}
//         </button>
//         <button className={styles.navButton} onClick={goNext}>
//           &#x276F; {/* Right Arrow */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OurWork;

import { useState, useEffect } from 'react';
import styles from './OurWork.module.css';
import Image from "next/image";

import ProjectImg from "../../public/static/project.png";
import LeftArrow from "../../public/icon/left-arrow.svg";
import RightArrow from "../../public/icon/right-arrow.svg";

const Carousel = () => {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // State to track items per view

  // Example data (replace with your dynamic data)
  const data = [
    { image: ProjectImg, title: 'Project 1' },
    { image: ProjectImg, title: 'Project 2' },
    { image: ProjectImg, title: 'Project 3' },
    { image: ProjectImg, title: 'Project 4' },
    { image: ProjectImg, title: 'Project 5' },
    { image: ProjectImg, title: 'Project 6' },
  ];

  // Update itemsPerView based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 600) {
        setItemsPerView(1); // 1 item per view on mobile screens
      } else {
        setItemsPerView(3); // 3 items per view on larger screens
      }
    };

    updateItemsPerView(); // Initial check
    window.addEventListener('resize', updateItemsPerView); // Listen for screen size changes

    return () => {
      window.removeEventListener('resize', updateItemsPerView); // Cleanup listener on unmount
    };
  }, []);

  // Calculate maximum index based on the total number of items
  const maxIndex = Math.max(0, Math.ceil(data.length / itemsPerView) - 1);

  // Navigation Handlers
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.partners_header}>
        <p className={styles.partners_par}>Lorem Ipsum</p>
        <h4 className={styles.banner_h4}>Our Work</h4>
      </div>

      <div className={styles.carouselContainerInner}>
        <div className={styles.carousel}>
          {data
            .slice(currentIndex * itemsPerView, currentIndex * itemsPerView + itemsPerView)
            .map((item, index) => (
              <div key={index} className={styles.carouselItem}>
                <div className={styles.imageWrapper}>
                  <Image src={item.image} alt={item.title} className={styles.carouselImage} />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageText}>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.navButtonDiv}>
          <button className={`${styles.navButton} ${styles.navButtonLeft}`} onClick={goPrev}>
            <Image src={LeftArrow} className={styles.arrow_img} />
          </button>
          <button className={`${styles.navButton} ${styles.navButtonRight}`} onClick={goNext}>
            <Image src={RightArrow} className={styles.arrow_img} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
