import Head from 'next/head'

import Banner from '@/components/Banner/Banner';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Packages from '@/components/Packages/Packages';
import Description from '@/components/Description/Description';
import TutorialSection from '@/components/TutorialSection/TutorialSection';
import Features from '@/components/Features/Features';
import Selection from '@/components/Selection/Selection';
import PitchSection from '@/components/PitchSection/PitchSection';
import FAQ from '@/components/FAQ/FAQ';
import ClientReviews from '@/components/ClientReviews/ClientReviews';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Folo | Quality Instagram followers for sale</title>
        <meta name="description" content="Folo web page made with next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <div className={styles.container}>
        <Banner />
        <Header />
        <Hero />
        <Description />
        <Packages />
        <TutorialSection />
        <Features />
        <Selection />
        <PitchSection />
        <FAQ />
        <ClientReviews />
      </div>
    </>
  )
}
