import React from 'react'

const sample = [
  {img:'/assets/images/img-3.jpg', title:'דנה ויסני', subtitle:'מדליית ארד WNBF Israel 2022', desc:'דנה הגיעה מרקע קרוספיט ועוד...', quote:'"בראל: בעיניים שלי דנה היא השראה אחת ענקית."'},
  {img:'/assets/images/img-4.jpg', title:'אלכס יודלא', subtitle:'מר קפריסין 2024', desc:'אלכס הגיע עם מטרה לעלות לבמה ברמה בינלאומית.', quote:'"מי היה מאמין שאסיים במקום הראשון..."'}
]

export default function Results(){
  return (
    <section id="results" className="results">
      <div className="container">
        <h2 className="section-title">קהילת המתברזלים - תוצאות</h2>
        <p className="results-subtitle">עזבו רגע את התוצאות המרשימות בצד.</p>
        <div className="results-grid">
          {sample.map((r,i)=> (
            <div key={i} className="result-card">
              <div className="result-image"><img src={r.img} alt={r.title} onError={(e)=>{e.target.style.display='none'}}/></div>
              <div className="result-content">
                <h4>{r.title}<br/><span style={{fontSize:'0.9rem', color:'var(--silver)', fontWeight:500}}>{r.subtitle}</span></h4>
                <p className="result-description">{r.desc}</p>
                <p className="result-quote"><em>{r.quote}</em></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
