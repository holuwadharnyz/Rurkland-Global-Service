import React from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.partners_header}>
        <p className={styles.partners_par}>QUESTIONS FROM YOU TO US</p>
        <h4 className={styles.banner_h4}>Frequently Asked <br /> Questions</h4>
      </div>

      <div className={styles.faqCardDiv}>
        <div className={styles.faqCardDivScroll}>
          <details className={styles.faqCard}>
            <summary className={`${styles.title} ${styles.noMarker}`}>
               What is Unlimited Cope Foundation?
            </summary>
            <p className={styles.FaqDetails}>
              UCF stands as a bridge between real life and the world of
              decentralization, focusing on the neglected humanity aspect. We
              believe in helping hands because as human beings, we will always
              need help at one point in our lives (No man is sufficient of
              self).
            </p>
          </details>

          <details className={styles.faqCard}>
            <summary className={`${styles.title} ${styles.noMarker}`}>
               Why the name Unlimited Cope Foundation?
            </summary>
            <p className={styles.FaqDetails}>
              In mid-2021, Unlimited Cope launched on the Solana blockchain,
              giving over 2000 individuals free funds. Cope founder Cyrii
              believes in giving and sharing love, a principle that the team
              continues to leverage.
            </p>
          </details>

          <details className={styles.faqCard}>
            <summary className={`${styles.title} ${styles.noMarker}`}>
               What is our mission?
            </summary>
            <p className={styles.FaqDetails}>
              Our mission is clear: we are dedicated to empowering countless
              individuals, building a chain of support that reaches far and
              wide. Through our efforts, we sow seeds of love and compassion
              in the hearts of those we are privileged to help. Together, we
              can make a difference, one act of kindness at a time. Join us on
              our journey towards a more compassionate and unified world.
              Together, we can create a future where everyone has the chance
              to thrive and succeed. Let's make the world a better place, hand
              in hand with Unlimited Cope Foundation.
            </p>
          </details>

          <details className={styles.faqCard}>
            <summary className={`${styles.title} ${styles.noMarker}`}>
               What is COPE DAO?
            </summary>
            <p className={styles.FaqDetails}>
              The era of “memecoins” on Solana in 2021 birthed COPE,
              initiating education and support for Solana and its ecosystem.
              The influence of Cope Gang, marketing SOLANA, and web3 propelled
              COPE to unimaginable heights. COPE DAO, beyond a DAO, is a
              family and community pushing the mission of making SOLANA the
              frontrunner in WEB3 and online communities.
            </p>
          </details>

          <details className={styles.faqCard}>
            <summary className={`${styles.title} ${styles.noMarker}`}>
               COPE Psychology
            </summary>
            <p className={styles.FaqDetails}>
              Learning is paramount to onboarding online communities to web3
              and SOLANA as a BLOCKCHAIN. COPE at large is willing to help
              SOLANA communities ease the burden and have a soft landing into
              the CRYPTO SPACE with the support of partners, taking SOLANA to
              the greatest heights.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
