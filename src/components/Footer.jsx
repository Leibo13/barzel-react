import React from 'react'
import AccessibilityWidget from './AccessibilityWidget'
export default function Footer(){
  return (
    <footer id="contact" className="footer">
    <AccessibilityWidget />
      <div className="container">
        <div className="footer-content">
          <img src="/assets/images/6.png" width="150px" alt="BARZEL Coaching Logo" className="footer-logo" />
          <div className="footer-contact">
            <a href="mailto:Barelklor@gmail.com">Barelklor@gmail.com</a>
            <a href="tel:+972546222479">054-6222479</a>
            <a href="https://wa.me/972546222479" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://instagram.com/Barelklor" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <nav className="footer-links" style={{marginTop:20}}>
            <a href="/privacy.html">מדיניות פרטיות</a>
            <a href="/terms.html">תנאי שימוש</a>
            <a href="/disclaimer.html">הצהרת בריאות</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 BARZEL Coaching. כל הזכויות שמורות.</p