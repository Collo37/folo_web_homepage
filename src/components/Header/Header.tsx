import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from "./Header.module.css";

const Header = () => {
    const paths: String[] = ["Home", "Buy Instagram Likes", "Buy Instagram Followers", "Buy Instagram Views", "Contact Us", "menu"];

    return (
        <header className={styles.container}>
            <div className={styles.header_items_left}>
                <Link href="/" className={styles.logo}>
                    <Image alt="logo" src="/assets/images/Logo.svg" width={140} height={50} />
                </Link>
            </div>
            <div className={styles.header_items_center}>
                {
                    paths.map((path, index) => {
                        return (
                            <Link href="#" key={index} className={`${styles.header_link} ${index === paths.length - 1 && styles.menu}`}>{path}</Link>
                        )
                    })
                }
            </div>
            <div className={styles.header_items_right}>
                <span className={styles.free_trial_button}>
                    FREE TRIAL
                </span>
            </div>
        </header>
    )
}

export default Header