import React, { useState } from 'react'

const items = [
  {q:'איך עובד הליווי אונליין בפועל?', a:'תהליך מותאם אישית הכולל 2 Check In\'s בחודש ותמיכה בצ\'אט.'},
  {q:'האם אני צריך חדר כושר?', a:'לא בהכרח. ניתן להתאים תוכנית לציוד ביתי.'},
  {q:'כמה ליווי אישי זה באמת?', a:'ניתוח טכני, תזונתי ומנטלי עם מענה יומיומי.'}
]

export default function FAQ(){
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">שאלות נפוצות</h2>
        <div className="faq-category">
          {items.map((it,i)=> (
            <div className="faq-item" key={i}>
              <div className={`faq-question ${open===i? 'active':''}`} onClick={()=>setOpen(open===i?null:i)}>
                <span>{it.q}</span>
                <span className={`faq-icon ${open===i? 'active':''}`}>+</span>
              </div>
              <div className={`faq-answer ${open===i? 'active':''}`}>{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
