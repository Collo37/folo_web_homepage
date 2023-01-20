import { reasons } from '@/constants/data';
import Image from 'next/image';
import React from 'react';

import styles from "./Selection.module.css";

const Selection = () => {
  return (
    <div className={styles.container}>
        <section className={styles.selection_left}>
            <h2 className={styles.selection_left_title}>Reasons to buy instagram followers</h2>
            <p className={styles.selection_left_description}>There are several advantages as to why you should consider buying Instagram followers. We will list down a few benefits you can look forward to when you’re buying Instagram services from iDigic.</p>
            <div className={styles.selection_left_reasons}>
                {
                    reasons.map((reason, index) => {
                        return (
                            <span className={styles.reason} key={index}>
                                {reason}
                            </span>
                        )
                    })
                }
            </div>
        </section>
        <section className={styles.selection_right}>
            <Image alt="brand-awareness" src="/assets/images/reasons-section-illustration.svg" width={340} height={280} />
            <h2 className={styles.selection_right_title}>Get more brand awareness</h2>
            <p className={styles.selection_right_description}>
            If you are looking to get more people on board then the easiest way to go about it would be to get a lot of followers. The simplest method to get more followers for your brand with a push of a button would be to buy Instagram followers from iDigic. More real followers mean that more people are interested in what your brand has to say. Also, when you have a high follower count, you will gain credibility with other brands in your niche as well as other people. You can find great prices to increase your follower count instantly.
            </p>
        </section>
    </div>
  )
}

export default Selection