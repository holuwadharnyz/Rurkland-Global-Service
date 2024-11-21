"use client"
import React, { Component } from "react";
import styles from "./ContactUs.module.css";
import Button from "../Button/Button";

class ContactUs extends Component {
  render() {

    return (
      <div id="contact" className={styles.container}>
        <div className={styles.container_inner}>
        <div className={styles.div_one}>
          <p className={styles.partners_par}>QUESTIONS FROM YOU TO US</p>
          <h4 className={styles.banner_h4}>Get A Quote</h4>
          <p className={styles.banner_P}>Looking for reliable, tailored energy solutions? At Rurkland, we offer customized quotes for petroleum products, marine fuels, and distribution services. Our team is ready to provide you with competitive pricing and top-quality service. Simply fill out the form below, and we’ll get back to you with a no-obligation quote. Let’s power your business with the best in the industry.</p>
        </div>
        <div className={styles.form_div}>
          <form onSubmit={this.handleSubmit} className={styles.form_card}>
            <div>
              <input type="text" name="name" className={styles.form_card_input} placeholder="Your name"/>
            </div>
            <div>
              <input type="phone" name="phone" className={styles.form_card_input} placeholder="Your phone number"/>
            </div>
            <div>
              <input type="email" name="email" className={styles.form_card_input} placeholder="Your email address"/>
            </div>
            <div className={styles.button_div}>
              <Button backgroundColor="transparent" textColor="#4158EE" border="1px solid #4158EE" padding="12px 30px">Submit Form</Button>
            </div>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;