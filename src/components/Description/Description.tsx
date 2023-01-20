import Image from 'next/image';
import React from 'react'

import styles from "./Description.module.css";

const Description = () => {
    return (
        <div className={styles.container}>
            <div className={styles.description_left}>
                <Image alt="followers-red" src="/assets/images/pricing-card-red.svg" width={250} height={165} />
                <Image alt="followers-red" src="/assets/images/pricing-card-blue.svg" width={350} height={260} />
            </div>
            <div className={styles.description_right}>
                <h2 className={styles.section_title}>
                    Buy High-Quality Instagram Followers Packages From Idigic
                </h2>
                <span className={styles.persuasion}>To experience our quality and instant delivery speed, try our instagram followers trial (100% free)</span>
                <div className={styles.details}>
                    <h3 className={styles.details_title}>News 7 January 2020</h3>
                    <p className={styles.details_description}>
                        Followers are working. Start-time: 0-3 hours. Delivery speed: 100 - 500 followers per hour. If you experience minor drops, don&apos;t worry: we refill lost followers automatically, daily
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description