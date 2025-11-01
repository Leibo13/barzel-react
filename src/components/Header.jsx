import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <a href="#" className="logo">
              <img src="/assets/images/Barzel-Final-Ver-11.png" alt="BARZEL Logo" />
            </a>
            <div className="logo-subtitle">Coached by Barel Klor</div>
          </div>
          <button className="nav-toggle" aria-label="תפריט ניווט" onClick={() => setOpen(v=>!v)}>☰</button>
          <nav className={`nav ${open? 'show':''}`}>
            <a href="#hero" className="cta-btn-small">להתחיל</a>
            <a href="#about">נעים להכיר</a>
            <a href="#pricing">תוכניות</a>
            <a href="#features">מה בליווי</a>
            <a href="#results">הקהילה</a>
            <a href="#faq">שאלות</a>
            <a href="#contact">צור קשר</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
