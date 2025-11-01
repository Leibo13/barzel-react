import React, { useEffect, useState } from 'react'

export default function CookieBanner(){
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const consent = localStorage.getItem('cookie_consent')
    if(!consent) setVisible(true)
  },[])

  function accept(){
    localStorage.setItem('cookie_consent','accepted')
    setVisible(false)
    // could initialize analytics here
  }
  function reject(){
    localStorage.setItem('cookie_consent','rejected')
    setVisible(false)
  }

  if(!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">אנחנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך.</div>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-accept" onClick={accept}>קבל הכל</button>
          <button className="cookie-btn cookie-reject" onClick={reject}>דחה הכל</button>
          <a href="/privacy.html" className="cookie-settings">מדיניות פרטיות</a>
        </div>
      </div>
    </div>
  )
}
