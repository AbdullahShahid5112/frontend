import Image from "next/image";
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Accreditations from '../components/Accreditations'
import AreasOfExpertise from '../components/AreasOfExpertise'
import Testimonials from '../components/Testimonials'
import FeaturedServices from '../components/FeaturedServices'
import Rates from '../components/Rates'
import Contact from '../components/Contact'
export default function Home() {
  return (
   <>
      <Head>
        <title>Nerea - Psychologist | Professional Psychological Services</title>
        <meta name="description" content="Professional psychological services by Nerea. Online therapy, corporate workshops, and business psychology services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Accreditations />
        <AreasOfExpertise />
        <Testimonials />
        <FeaturedServices />
        <Rates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
