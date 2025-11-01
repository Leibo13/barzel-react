import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Features from './components/Features'
import Results from './components/Results'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Features />
        <Results />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
