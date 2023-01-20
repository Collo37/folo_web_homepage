import Image from 'next/image';
import React from 'react';

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.hero_left}>
            <h1 className={styles.hero_left_title}>
                Buy Real Instagram Followers
            </h1>
            <button className={styles.free_trial_button}>Free Trial</button>
        </div>
        <div className={styles.hero_right}>
            <Image className={styles.hero_image} alt="hero-image" src="/assets/images/hero-image.svg" width={540} height={500} />
        </div>
    </div>
  )
}

export default Hero