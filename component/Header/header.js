"use client"
import React, { useState, useRef, useEffect } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { usePathname } from "next/navigation"; // Import usePathname

import HamburgerIcon from "../../public/icon/burger.svg";
import CloseIcon from "../../public/icon/close-menu.svg";
import Location from "../../public/icon/location.svg";
import Call from "../../public/icon/call.svg";
import SMS from "../../public/icon/sms.svg";
import Logo from "../../public/icon/logo.svg";

import Button from "../Button/Button";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => pathname === path;

  // Close menu when navigating to another page
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.col_1}>
        <Marquee gradient={false} speed={100}>
          <div className={styles.help_header}>
            <Image src={Location} className={styles.help_header_icon} />
            <span className={styles.help_header_title}>6th Floor, Kariko Towers, 9 Wharf Road, Apapa, Lagos, Nigeria</span>
          </div>

          <div className={styles.help_header}>
            <Image src={Call} className={styles.help_header_icon} />
            <span className={styles.help_header_title}>+2348083463626</span>
          </div>

          <div className={styles.help_header}>
            <Image src={SMS} className={styles.help_header_icon} />
            <span className={styles.help_header_title}>admin@rurkland.com</span>
          </div>
        </Marquee>
      </div>

      <div className={styles.col_2}>
        <a href='/'>
          <Image src={Logo} className={styles.logo} />
        </a>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <Image src={menuOpen ? CloseIcon : HamburgerIcon} alt="Menu" />
        </div>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <Link href='/'>
            <span className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>
              Home
            </span>
          </Link>
          <Link href='/services'>
            <span className={`${styles.link} ${isActive('/services') ? styles.active : ''}`}>
              Our Services
            </span>
          </Link>
          <Link href="#contact">
            <Button backgroundColor="transparent" textColor="#4158EE" border="1px solid #4158EE">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;


// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import styles from "./header.module.css";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";
// import { usePathname } from "next/navigation"; // Import usePathname

// import HamburgerIcon from "../../public/icon/burger.svg";
// import CloseIcon from "../../public/icon/close-menu.svg"; // Ensure this points to the correct close icon
// import Location from "../../public/icon/location.svg";
// import Call from "../../public/icon/call.svg";
// import SMS from "../../public/icon/sms.svg";
// import Logo from "../../public/icon/logo.svg";

// import Button from "../Button/Button";
// import Link from "next/link";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname(); // Get the current path
//   const menuRef = useRef(null);

//   // Function to toggle the menu state
//   const toggleMenu = () => {
//     setMenuOpen((prevState) => !prevState);
//   };

//   // Function to check if the link is active
//   const isActive = (path) => pathname === path;

//   // Close menu when navigating to another page
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   // Close menu when clicking outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.col_1}>
//         <Marquee gradient={false} speed={100}>
//           <div className={styles.help_header}>
//             <Image src={Location} className={styles.help_header_icon} />
//             <span className={styles.help_header_title}>Plot 93, Ray Agwulonu Avenue, Choos Estate, Wumba District, Abuja FCT, Nigeria</span>
//           </div>

//           <div className={styles.help_header}>
//             <Image src={Call} className={styles.help_header_icon} />
//             <span className={styles.help_header_title}>+2348083463626</span>
//           </div>

//           <div className={styles.help_header}>
//             <Image src={SMS} className={styles.help_header_icon} />
//             <span className={styles.help_header_title}>info@rurklandglobal.com</span>
//           </div>
//         </Marquee>
//       </div>

//       <div className={styles.col_2}>
//         <a href='/'>
//           <Image src={Logo} className={styles.logo} />
//         </a>

//         <div className={styles.hamburger} onClick={toggleMenu}>
//           <Image
//             src={menuOpen ? CloseIcon : HamburgerIcon}
//             alt="Menu"
//           />
//         </div>

//         <div
//           className={`${styles.links} ${menuOpen ? styles.open : ""}`}
//           ref={menuRef} // Attach ref to the links container
//         >
//           <Link href='/'>
//             <span className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>
//               Home
//             </span>
//           </Link>
//           <Link href='/services'>
//             <span className={`${styles.link} ${isActive('/services') ? styles.active : ''}`}>
//               Our Services
//             </span>
//           </Link>
//           <Link href="#contact">
//             <Button backgroundColor="transparent" textColor="#4158EE" border="1px solid #4158EE">
//               Get a Quote
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
