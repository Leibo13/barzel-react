import React from 'react'

function Card({badge, title, price, period, description, cta, href}){
  return (
    <div className="pricing-card">
      {badge && <div className="pricing-badge">{badge}</div>}
      <h3 dangerouslySetInnerHTML={{__html:title}} />
      <div className="pricing-price">{price}</div>
      <div className="pricing-period">{period}</div>
      <p className="pricing-description">{description}</p>
      <a className="process-btn" href={href} target="_blank" rel="noopener noreferrer">{cta}</a>
    </div>
  )
}

export default function Pricing(){
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">התחל/י להתחשל</h2>
        <p className="pricing-subtitle">לבחור את התוכנית המתאימה לך</p>
        <div className="pricing-grid">
          <Card badge="מומלץ לבינוניים עד מתקדמים" title="ליווי אונליין" price="₪550" period="/חודש" description="מעטפת ליווי מקצועי שלמה" cta="לתשלום" href="https://meshulam.co.il/purchase?b=d9b485f0f34e8286e08f91f4393a6103" />
          <Card badge="מומלץ למתחילים" title={`היברידי<br/>(פרונטלי + אונליין)`} price="₪1,000" period="/חודש" description="שילוב בין אימונים פרונטליים לליווי אונליין" cta="בדוק זמינות" href="https://wa.me/972546222479" />
          <Card badge="מומלץ למתחרים" title="ליווי תחרותי" price="₪750" period="/חודש" description="הכנה תחרותית למתחרים" cta="לתשלום" href="https://meshulam.co.il/purchase?b=82836475497332ac97e2c9ba8b581a9b" />
          <Card title="אימונים פרונטליים / זוגיים" price="₪200" period="לאימון" description="אימוני כח וטכניקה בסטודיו פרטי" cta="תאם אימון" href="https://wa.me/972546222479" />
        </div>
        <p className="pricing-note">*כל המחירים כוללים מע"מ. מספר המקומות בכל מסלול מוגבל.*</p>
      </div>
    </section>
  )
}
