import Image from "next/image";
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Working from "@/components/Working";

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
        <Working/>
      </main>
    </>
  );
}
