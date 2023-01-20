import React from 'react';

import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
        <p className={styles.banner_row_top}>7 JANUARY 2020: <span className={styles.banner_row_top_green}>25% OFF</span> On All <span className={styles.banner_row_top_yellow}>Likes & Followers</span> For A limited Time!</p>
        <span className={styles.banner_row_bottom}>(Prices displayed have the discount included)</span>
    </div>
  )
}

export default Banner