"use client"
import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

import ScrollArrow from "../../public/icon/scroll-arrow.svg";
import Image from 'next/image';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollToTop}>
          <Image src={ScrollArrow} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
