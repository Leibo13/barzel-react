import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Features from './components/Features'
import Results from './components/Results'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Registration from './components/Registration'
import CookieConsent from 'react-cookie-consent'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Registration/>
        <Features />
        <Results />
        <FAQ />
        <CookieConsent
          location="bottom"
          buttonText="הבנתי"
          cookieName="barzelCookieConsent"
          style={{ background: "#2B373B"}}
          buttonStyle={{color: "#3b504dff", fontSize:"13px"}}
          expires={365}>
            האתר משתמש בקוקיז כדי לשפר את חווית המשתמש. על ידי המשך השימוש באתר, אתה מסכים למדיניות הפרטיות שלנו.     
            
        </CookieConsent>
      </main>
      <Footer />
    </div>
  )
}
