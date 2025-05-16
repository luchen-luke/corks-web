'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Community from '@/components/Community';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Community />
        <Download />
        <Footer />
      </main>
    </>
  );
}
