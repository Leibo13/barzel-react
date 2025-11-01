
import React from 'react'
import { openPopup } from '../utils/openPopup'
import { InlineWidget } from 'react-calendly'

export default function Hero(){
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1 className="hero-title">להתאמן כמו מקצוענים, עם מקצוענים.</h1>
        <p className="hero-subtitle">אימון מבוסס ראיות. תהליך בהתאמה אישית. ניסיון עשיר. תוצאות מובטחות.</p>
    <div className="hero-buttons">
  <a className="btn-primary" onClick={(e) => openPopup("https://calendly.com/barzelonlinecoaching/coaching-call")}>הגשת מועמדות לליווי אונליין</a>
  <a href="https://wa.me/972546222479" className="btn-primary">לאימונים פרונטליים</a>
  <a href="https://wa.me/972546222479" className="btn-primary">לשיעורי פוזינג</a>
    </div>
        <p className="hero-note">מקומות מוגבלים. לרציניים בלבד. חובבנים ותחרותיים</p>
      </div>
    </section>
  )
}
