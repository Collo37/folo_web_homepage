import { footerItems } from '@/constants/data';
import Image from 'next/image';
import React from 'react';

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer_container_left}>
                <Image alt="logo" src="/Logo.png" width={150} height={55} />
            </div>
            <div className={styles.footer_container_right}>
                {
                    footerItems.map((footerItem, index) => {
                        return (
                            <div key={index} className={styles.footer_links_container}>
                                <h3 className={styles.footer_links_title}>
                                    {footerItem.title}
                                </h3>

                                <ul className={styles.footer_links}>
                                    {
                                        footerItem.links.map((footerLink, index) => {
                                            return (
                                                <li key={index} className={styles.footer_link}>{footerLink}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer