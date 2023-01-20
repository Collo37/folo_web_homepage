import React from 'react';

import { salesPackages } from '@/constants/data';

import styles from "./Packages.module.css";

const Packages = () => {

    return (
        <div className={styles.container}>
            {
                salesPackages.map((salesPackage, index) => {
                    return (
                        <div key={index} className={`${styles.package} ${salesPackage.featured && styles.highlighted}`}>
                            {salesPackage.featured ? <div className={styles.check_mark} /> : null}
                            <div className={styles.package_top}>
                                <span className={styles.package_discount}>{`${salesPackage.discount}% OFF`}</span>
                                <span className={styles.package_followers_count}>{`${salesPackage.noOfFollowers} Followers`}</span>
                                <span className={styles.package_price}>{`$${salesPackage.price}`}</span>
                            </div>
                            <div className={styles.package_center}>
                                {
                                    salesPackage.details.map((detail, index) => {
                                        return (
                                            <li key={index} className={styles.package_detail}>{detail}</li>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.package_bottom}>
                                <button className={styles.package_button}>Buy Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Packages