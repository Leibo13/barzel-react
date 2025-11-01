import React from 'react'
import { openPopup } from '../utils/openPopup'

  function Card({badge, title, price, period, description, cta, href, features, popupUrl}){
    const handleClick = (e) => {
      // if href exists, let anchor behave (open external tab). Otherwise call openPopup
    
    if (popupUrl) openPopup(href);
    else window.open(href, '_blank', 'noopener,noreferrer');
    };

    return (
      <div className="pricing-card">
        {badge && <div className="pricing-badge">{badge}</div>}
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <div className="pricing-price">{price}</div>
        <div className="pricing-period">{period}</div>
        <p className="pricing-description">{description}</p>
        {features && features.length > 0 && (
          <ul className="pricing-features">
            {features.map((f, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: f }} />
            ))}
          </ul>
        )}

        <a className="process-btn popup" onClick={handleClick}>{cta}</a>
        

      </div>
    );
  }

export default function Pricing(){
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">התחל/י להתחשל</h2>
        <div className="pricing-grid">
          <Card
            badge="מומלץ לבינוניים עד מתקדמים"
            title="ליווי אונליין"
            price="₪550"
            period="/חודש"
            description="מעטפת ליווי מקצועי שלמה הנבנית סביב סדר היום, הרמה והמטרות שלך."
            cta="לתשלום"
            href="https://meshulam.co.il/purchase?b=d9b485f0f34e8286e08f91f4393a6103"
            popupUrl={true}
            features={[
              "גישה לפרופיל האישי שלך, הכולל תוכנית אימונים ותזונה המתחדשות ומתעדכנות מדי שבוע, נתונים סטטיסטיים למעקב אחר התקדמות, מדריכים, סרטוני הדרכה ומאמרים מקצועיים בלעדיים.",
              "2 סרטוני משוב אישיים בפלטפורמת Loom, שבהם אני עובר על הדיווח שלך, מנתח את ההתקדמות ואת סרטוני הטכניקה ששלחת, מצביע על נקודות לשיפור ומספק הנחיות מדויקות להמשך התהליך.",
              "זמינות מלאה תוך מתן מענה עד 24 שעות, דרך צ'אט ישיר בטלגרם.",
              "בשורה התחתונה: 2 צ'ק אינס בחודש (מפגש פרונטלי אחד אופציונלי).",
              "מתאים למתאמנים בינוניים או מתקדמים שמחפשים להגיע לרמה הבאה."
            ]}
          />
        
          <Card 
          badge="מומלץ למתחילים" 
          title={`היברידי<br/>(פרונטלי + אונליין)`} 
          price="₪1,000" 
          period="/חודש" 
          description="שילוב בין אימונים פרונטליים לליווי אונליין" 
          cta="בדוק זמינות"
          popupUrl={false}
          href="https://wa.me/972546222479"
          features={[
            "4 אימונים אישיים בחודש (אחד בשבוע).",
            "כל מה שכלול בליווי אונליין (ראה/י כרטיסייה).",
            "מתאים למתאמנים מתחילים שרוצים להתקדם לעצמאות בחדר הכושר."
          ]}
          />
         
          <Card 
          badge="מומלץ למתחרים" 
          title="ליווי תחרותי" 
          price="₪750" 
          period="/חודש" 
          description="הכנה תחרותית למתחרים ומתחרות בפיתוח גוף טבעי."
          cta="לתשלום" 
          popupUrl={true}
          href="https://meshulam.co.il/purchase?b=82836475497332ac97e2c9ba8b581a9b"
          features={[
            "תכנון שנתי מלא (Off Season + Pre Prep + Prep).",
            "גישה לפרופיל האישי שלך, הכולל תוכנית אימונים ותזונה המתחדשות ומתעדכנות מדי שבוע, נתונים סטטיסטיים למעקב אחר התקדמות, מדריכים, סרטוני הדרכה ומאמרים מקצועיים בלעדיים.",
            "קבלת פרוטוקול פוזינג והדרכה לקטגוריות בילדינג וקלאסיק בצ'ק אינס השבועיים.",
            "פרוטוקול Back/Front/Mid/Linear Load לשבוע ה - Peak Week, הכולל מניפולציות נוזלים, אשלגן ונתרן להשגת המראה הנדרש ביום הבמה.",
            "בשורה התחתונה: 4 צ'ק אינס בחודש (מפגש פרונטלי אחד אופציונלי)."
          ]}
          />
          
          <Card 
          title="אימונים פרונטליים / זוגיים" 
          price="₪200" 
          period="לאימון" 
          description="אימוני כח וטכניקה בסטודי פרטי בהוד השרון. התחייבות ל־4 או 8 אימונים בחודש." 
          cta="תאם אימון" 
          popupUrl={false}
          href="https://wa.me/972546222479"
          features={[
            "יחס אישי 1 על 1 או זוגי.",
            "הקניית מיומנות טכנית ראשונית בתרגילי הבסיס כגון: סקוואט, בנץ', דדליפט.",
            "לאחר בניית בסיס טכני, בניית עצימות והתקדמות בתוכנית אימון ייעודית לסטודיו.",
            "נקודת הזינוק הראשונית למתאמני כח מתחילים."
          ]}
          />
        </div>
        <p className="pricing-note">*כל המחירים כוללים מע"מ. מספר המקומות בכל מסלול מוגבל.*</p>
      </div>
    </section>
  )
}
