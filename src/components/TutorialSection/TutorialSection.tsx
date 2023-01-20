import { tutorialSteps } from '@/constants/data';
import Image from 'next/image';
import React from 'react'

import styles from "./TutorialSection.module.css";

const TutorialSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.section_left}>
            <h2 className={styles.section_left_title}>How To Buy Real Instagram Followers</h2>
            <p className={styles.section_left_subtitle}>Get closer to your goal with active Instagram followers</p>
            <article className={styles.section_left_description}>
                Getting more followers for your IG account just got easier
                <br />
                <br />
                All you need to do is select the package that is most appealing to you, type in your instagram username, and check the order out through our secure payment portal
                <br />
                <br />
                Once your payment is verified, we will immedialtely begin to add IG followers to your account
            </article>
        </div>
        <div className={styles.section_right}>
            {
                tutorialSteps.map((step, index) => {
                    return (
                        <div key= {index} className={styles.tutorial_step}>
                            <span className={styles.step_number}>{index + 1}</span>
                            <Image alt="step-img" src={step.image} width={step.width} height={step.height} />
                            <p className={styles.tutorial_title}>{step.title}</p>
                            <p className={styles.tutorial_details}>{step.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TutorialSection