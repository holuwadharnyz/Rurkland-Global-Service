import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/header";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RURKLAND GLOBAL SERVICES",
  description: "Excellence in Every Drop, Progress in Every Partnership and Powering a Sustainable Future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Header />
        <ScrollToTop />
          {children}
        <Footer />
      </body>
    </html>
  );
}
