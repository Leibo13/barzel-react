import React from 'react'

export default function Features(){
  const items = [
    {icon:'🎯', title:'תוכנית אימונים', desc:'תוכנית אימונים מבוססת ראיות בהתאמה אישית.'},
    {icon:'📹', title:"צ׳ק-אין וידאו שבועי", desc:'סרטון משוב אישי עם ניתוח טכני.'},
    {icon:'🍎', title:'אסטרטגיות דיאטה', desc:'עבודה עם דיאטה אינטואיטיבית או תפריט מותאם.'},
    {icon:'⚡', title:'ניהול עומסים מתקדם', desc:'פיריודיזציה לשיפור ביצועים.'},
    {icon:'💬', title:'תמיכה בצ׳אט', desc:'זמינות ותמיכה שוטפת.'},
    {icon:'📊', title:'מדדים ושקיפות', desc:'מעקב סטטיסטי אחרי התקדמות.'}
  ]
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">מה בליווי?</h2>
        <div className="features-grid">
          {items.map((it,i)=> (
            <div key={i} className="feature-card">
              <div className="feature-icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
