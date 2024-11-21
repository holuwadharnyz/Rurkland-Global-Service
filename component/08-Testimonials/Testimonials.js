// import { useState, useEffect } from 'react';
// import styles from './Testimonials.module.css';
// import Image from "next/image";

// import James from "../../public/static/james.png";
// import Chinonso from "../../public/static/chinonso.png";
// import Tunde from "../../public/static/tunde.png";
// import Straight from "../../public/icon/straight.svg";

// const Testimonials = () => {
//   // State to keep track of the current slide index
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Example data (replace with your dynamic data)
//   const data = [
//     { image: James, fullname: 'James Oludayo', title: "Working with Rurkland has been a game-changer for our operations. Their team doesn't just deliver products – they deliver trust, integrity, and reliability. We've forged a long-term partnership where our goals are aligned, and we can always count on them to provide the best energy solutions. It's not just business; it's a relationship built on mutual success."},
//     { image: Chinonso, fullname: 'Chinonso Agunwa', title: "Rurkland's deep industry knowledge and local partnerships have been invaluable to our operations. Their expertise in sourcing and delivering petroleum products, combined with their strong relationships with local refineries, ensures we always receive top-quality products on time, every time. They truly understand the needs of our business and always go the extra mile."},
//     { image: Tunde, fullname: 'Tunde Lasisi', title: "As a company committed to sustainability, we needed a partner who shares our values. Rurkland's unwavering focus on safety and minimizing environmental impact aligns perfectly with our objectives. Their commitment to responsible operations gives us the confidence to move forward knowing we’re making a positive impact, both for our business and the environment."}
//   ];

//   // Number of items to show per view
//   const itemsPerView = 1;

//   // Calculate maximum index based on the total number of items
//   const maxIndex = Math.max(0, Math.ceil(data.length / itemsPerView) - 1);

//   // Automatically go to the next slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
//     }, 5000); // 5000ms = 5 seconds

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   return (
//     <div className={styles.carouselContainer}>

//       <div className={styles.partners_header}>
//         <p className={styles.partners_par}>TESTIMONIALS</p>
//         <h4 className={styles.banner_h4}>Hear What Our Customers <br /> Say</h4>
//         <Image src={Straight} alt="" className={styles.spiral_img} />
//       </div>

//       <div className={styles.carouselContainerInner}>
//         <div className={styles.carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {data.map((item, index) => (
//             <div key={index} className={styles.carouselItem}>
//               <div className={styles.imageWrapper}>
//                 <p className={styles.imageText}>{item.title}</p>
//                 <Image src={item.image} alt={item.title} className={styles.carouselImage} />
//                 <h2 className={styles.imageText2}>{item.fullname}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;




import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import Image from "next/image";

import James from "../../public/static/james.png";
import Chinonso from "../../public/static/chinonso.png";
import Tunde from "../../public/static/tunde.png";
import Straight from "../../public/icon/straight.svg";

const Testimonials = () => {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Example data (replace with your dynamic data)
  const data = [
    { image: James, fullname: 'James Oludayo', title: "Working with Rurkland has been a game-changer for our operations. Their team doesn't just deliver products – they deliver trust, integrity, and reliability. We've forged a long-term partnership where our goals are aligned, and we can always count on them to provide the best energy solutions. It's not just business; it's a relationship built on mutual success." },
    { image: Chinonso, fullname: 'Chinonso Agunwa', title: "Rurkland's deep industry knowledge and local partnerships have been invaluable to our operations. Their expertise in sourcing and delivering petroleum products, combined with their strong relationships with local refineries, ensures we always receive top-quality products on time, every time. They truly understand the needs of our business and always go the extra mile." },
    { image: Tunde, fullname: 'Tunde Lasisi', title: "As a company committed to sustainability, we needed a partner who shares our values. Rurkland's unwavering focus on safety and minimizing environmental impact aligns perfectly with our objectives. Their commitment to responsible operations gives us the confidence to move forward knowing we’re making a positive impact, both for our business and the environment." }
  ];

  // Number of items to show per view
  const itemsPerView = 1;

  // Calculate maximum index based on the total number of items
  const maxIndex = Math.max(0, Math.ceil(data.length / itemsPerView) - 1);

  // Automatically go to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [maxIndex]);

  // Function to go to a specific slide when a dot is clicked
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.partners_header}>
        <p className={styles.partners_par}>TESTIMONIALS</p>
        <h4 className={styles.banner_h4}>Hear What Our Customers <br /> Say</h4>
        <Image src={Straight} alt="" className={styles.spiral_img} />
      </div>

      <div className={styles.carouselContainerInner}>
        <div className={styles.carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {data.map((item, index) => (
            <div key={index} className={styles.carouselItem}>
              <div className={styles.imageWrapper}>
                <p className={styles.imageText}>{item.title}</p>
                <Image src={item.image} alt={item.title} className={styles.carouselImage} />
                <h2 className={styles.imageText2}>{item.fullname}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className={styles.dotsContainer}>
          {data.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
