import Image from 'next/image';
import React from 'react';

import styles from "./PitchSection.module.css";

const PitchSection = () => {
  return (
    <div className={styles.container}>
        <Image className={styles.section_image} alt="section-img" src="/assets/images/idigic-illustration.svg" width={530} height={450} />
        <section className={styles.section_right}>
            <h3 className={styles.section_right_title}>
                Why Idigic is the best site to buy Instagram Followers
            </h3>
            <p className={styles.section_details}>
            iDigic has expert social media marketers who are constantly evolving to incorporate newer trends into their processes. We have the experience and expertise to make sure that your brand can compete with much bigger brands when it comes to market share and credibility. Leading from the front ever since Instagram was launched, our proprietary techniques make sure that you will get the most out of your marketing spend.iDigic has been around for 4 years and we have a lot of satisfied customers who are willing to bet on us when it comes to Instagram services. We offer great prices and lightning quick services backed up by our reliable, 24/7 support network. If you’re looking for the best services when you want to buy Instagram followers cheap, you’ve just found it!
            </p>
            <button className={styles.section_button}>Free Trial</button>
        </section>
    </div>
  )
}

export default PitchSection