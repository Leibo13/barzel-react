import React from 'react'

export default function Hero(){
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1 className="hero-title">להתאמן כמו מקצוענים, עם מקצוענים.</h1>
        <p className="hero-subtitle">אימון מבוסס ראיות. תהליך בהתאמה אישית. ניסיון עשיר. תוצאות מובטחות.</p>
        <div className="hero-buttons">
          <a href="https://calendly.com/barzelonlinecoaching/coaching-call" className="btn-primary" target="_blank" rel="noopener noreferrer">הגשת מועמדות לליווי אונליין</a>
          <a href="https://wa.me/972546222479" className="btn-primary" target="_blank" rel="noopener noreferrer">לאימונים פרונטליים</a>
        </div>
        <p className="hero-note">מקומות מוגבלים. לרציניים בלבד. חובבנים ותחרותיים</p>
      </div>
    </section>
  )
}
