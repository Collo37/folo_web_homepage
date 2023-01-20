import { faqs } from '@/constants/data';
import React from 'react';

import styles from "./FAQ.module.css";

const FAQ = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.faq_section_title}>Frequently Asked Questions (FAQ)</h2>
            <div className={styles.faqs_container}>
                {
                    faqs.map((faq, index) => {
                        return (
                            <div className={styles.faq} key={index}>
                                <h3 className={styles.faq_title}>{faq.question}</h3>
                                <p className={styles.faq_answer}>{faq.answer}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FAQ