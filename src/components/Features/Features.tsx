import Image from 'next/image';
import React from 'react';

import { features } from '@/constants/data';

import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className={styles.container}>
        <section className={styles.features_intro}>
            <h2 className={styles.features_intro_title}>Why We Are The Best</h2>
            <p className={styles.features_intro_description}>If you’re looking for more engagement numbers for your brand, then your best bet is to get Instagram followers. Buying Instagram follower is easy and it saves time because they are added instantly to your account. Also, when you have a high follower count, you will gain credibility with other brands in your niche as well as other people.</p>
        </section>
        <section className={styles.features_highlights}>
            {
                features.map((feature, index) => {
                    return (
                        <div className={styles.feature} key={index}>
                            <Image alt="icon" src={feature.image} width={73} height={70} />
                            <p className={styles.feature_title}>{feature.featureName}</p>
                            <p className={styles.feature_description}>{feature.description}</p>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Features